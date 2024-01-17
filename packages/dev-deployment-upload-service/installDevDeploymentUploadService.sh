#!/bin/bash

: ${DDUS_BASE_DOWNLOAD_URL:="https://localhost:9001"}
: ${DDUS_BINARY_NAME:="dev-deployment-upload-service"}
: ${DDUS_GLOBAL_INSTALL_DIR:="/usr/local/bin"}
: ${DDUS_LOCAL_INSTALL_DIR:="$HOME/.local/bin"}
: ${DDUS_VERIFY_CHECKSUM:="true"}
: ${DDUS_USE_ROOT:="false"}
: ${DDUS_EXECUTE:="false"}

HAS_CURL="$(type "curl" &> /dev/null && echo true || echo false)"
HAS_WGET="$(type "wget" &> /dev/null && echo true || echo false)"
HAS_OPENSSL="$(type "openssl" &> /dev/null && echo true || echo false)"

# Discovers the architecture for this system.
initArch() {
  ARCH=$(uname -m)
  case $ARCH in
    armv5*) ARCH="armv5";;
    armv6*) ARCH="armv6";;
    armv7*) ARCH="arm";;
    aarch64) ARCH="arm64";;
    x86) ARCH="386";;
    x86_64) ARCH="amd64";;
    i686) ARCH="386";;
    i386) ARCH="386";;
  esac
}

# Discovers the operating system for this system.
initOS() {
  OS=$(echo `uname`|tr '[:upper:]' '[:lower:]')

  case "$OS" in
    # Minimalist GNU for Windows
    mingw*|cygwin*) echo "Windows not supported!" exit 1;
  esac
}

# Runs the given command as root (detects if we are root already)
runAsRoot() {
  if [ $EUID -ne 0 -a "$DDUS_USE_ROOT" = "true" ]; then
    sudo "${@}"
  else
    "${@}"
  fi
}

# Checks that the necessary tools are present.
verifySupported() {
  local supported="darwin-amd64\ndarwin-arm64\nlinux-amd64\nwindows-amd64"
  if ! echo "${supported}" | grep -q "${OS}-${ARCH}"; then
    echo "No prebuilt binary for ${OS}-${ARCH}."
    exit 1
  fi

  if [ "${HAS_CURL}" != "true" ] && [ "${HAS_WGET}" != "true" ]; then
    echo "Either curl or wget is required"
    exit 1
  fi

  if [ "${DDUS_VERIFY_CHECKSUM}" == "true" ] && [ "${HAS_OPENSSL}" != "true" ]; then
    echo "In order to verify checksum, openssl must first be installed."
    echo "Please install openssl or set DDUS_VERIFY_CHECKSUM=false in your environment."
    exit 1
  fi
}

# Checks if dev-deployment-upload-service is already installed
checkInstalledVersion() {
  if [[ -f "${DDUS_GLOBAL_INSTALL_DIR}/${DDUS_BINARY_NAME}" ]]; then
    echo "Dev Deployment Upload Service is already installed at ${DDUS_GLOBAL_INSTALL_DIR}/${DDUS_BINARY_NAME}"
    return 0
  fi
  if [[ -f "${DDUS_LOCAL_INSTALL_DIR}/${DDUS_BINARY_NAME}" ]]; then
    echo "Dev Deployment Upload Service is already installed at ${DDUS_LOCAL_INSTALL_DIR}/${DDUS_BINARY_NAME}"
    return 0
  fi
  return 1
}

# Downloads the binary package and also the checksum for that binary.
downloadFile() {
  DDUS_BIN_FILE="dev-deployment-upload-service-$OS-$ARCH"
  DDUS_DOWNLOAD_FILE="$DDUS_BIN_FILE.tar.gz"
  DOWNLOAD_URL="$DDUS_BASE_DOWNLOAD_URL/dev-deployments/upload-service/$DDUS_DOWNLOAD_FILE"
  CHECKSUM_URL="$DOWNLOAD_URL.sha256"
  DDUS_TMP_ROOT="$(mktemp -dt dev-deployment-upload-service-install-XXXXXX)"
  DDUS_TMP_FILE="$DDUS_TMP_ROOT/$DDUS_DOWNLOAD_FILE"
  DDUS_SUM_FILE="$DDUS_TMP_ROOT/$DDUS_DOWNLOAD_FILE.sha256"
  echo "Downloading $DOWNLOAD_URL"
  if [ "${HAS_CURL}" == "true" ]; then
    curl -SskL "$CHECKSUM_URL" -o "$DDUS_SUM_FILE"
    curl -SskL "$DOWNLOAD_URL" -o "$DDUS_TMP_FILE"
  elif [ "${HAS_WGET}" == "true" ]; then
    wget -q -O "$DDUS_SUM_FILE" "$CHECKSUM_URL"
    wget -q -O "$DDUS_TMP_FILE" "$DOWNLOAD_URL"
  fi
}

# Verifies the SHA256 checksum of the binary package.
verifyFile() {
  if [ "${DDUS_VERIFY_CHECKSUM}" == "true" ]; then
    printf "Verifying checksum... "
    local sum=$(openssl sha1 -sha256 ${DDUS_TMP_FILE} | awk '{print $2}')
    local expected_sum=$(cat ${DDUS_SUM_FILE})
    if [ "$sum" != "$expected_sum" ]; then
      echo "SHA sum of ${DDUS_TMP_FILE} does not match. Aborting."
      exit 1
    fi
    echo "Done."
  fi
}

# Installs the Dev Deployment Upload Service binary.
installFile() {
  DDUS_TMP="$DDUS_TMP_ROOT/bin"
  mkdir -p "$DDUS_TMP"
  tar xf "$DDUS_TMP_FILE" -C "$DDUS_TMP"
  if [ "${DDUS_USE_ROOT}" == "true" ]; then
    echo "Preparing to install $DDUS_BIN_FILE into ${DDUS_GLOBAL_INSTALL_DIR}"
    runAsRoot cp "$DDUS_TMP/$DDUS_BIN_FILE" "$DDUS_GLOBAL_INSTALL_DIR/$DDUS_BINARY_NAME"
    echo "$DDUS_BINARY_NAME installed into $DDUS_GLOBAL_INSTALL_DIR/$DDUS_BINARY_NAME" and available globally.
  else
    echo "No root access, installing for current user only."
    echo "Preparing to install $DDUS_BINARY_NAME into ${DDUS_LOCAL_INSTALL_DIR}"
    cp "$DDUS_TMP/$DDUS_BIN_FILE" "$DDUS_LOCAL_INSTALL_DIR/$DDUS_BINARY_NAME"
    echo "$DDUS_BINARY_NAME installed into $DDUS_LOCAL_INSTALL_DIR/$DDUS_BINARY_NAME".
  fi
}

# Cleanup temporary files
cleanup() {
  if [[ -d "${DDUS_TMP_ROOT:-}" ]]; then
    rm -rf "$DDUS_TMP_ROOT"
  fi
}

# DDUS_Executed if an error occurs.
fail_trap() {
  result=$?
  if [ "$result" != "0" ]; then
    if [[ -n "$INPUT_ARGUMENTS" ]]; then
      echo "Failed to install $DDUS_BINARY_NAME with the arguments provided: $INPUT_ARGUMENTS"
      help
    else
      echo "Failed to install $DDUS_BINARY_NAME"
    fi
  fi
  cleanup
  exit $result
}

# Tests the installed client to make sure it is working.
testVersion() {
  set +e
  DDUS="$(command -v $DDUS_BINARY_NAME)"
  if [ "$?" = "1" ]; then
    echo "$DDUS_BINARY_NAME not found. Is $DDUS_GLOBAL_INSTALL_DIR or $DDUS_LOCAL_INSTALL_DIR on your "'$PATH?'
    exit 1
  fi
  set -e
}

# Provides possible cli installation arguments
help () {
  echo "Accepted cli arguments are:"
  echo -e "\t[--help|-h ] ->> prints this help"
  echo -e "\t[--no-sudo]  ->> install without sudo"
  echo -e "\t[--run]      ->> runs the service after install"
}

# Execution

#Stop execution on any error
trap "fail_trap" EXIT
set -e

# Parsing input arguments (if any)
export INPUT_ARGUMENTS="${@}"
set -u
while [[ $# -gt 0 ]]; do
  case $1 in
    '--root')
       DDUS_USE_ROOT="true"
       ;;
    '--run')
       DDUS_EXECUTE="true"
       ;;
    '--help'|-h)
       help
       exit 0
       ;;
    *) exit 1
       ;;
  esac
  shift
done
set +u

initArch
initOS
verifySupported
if ! checkInstalledVersion; then
  downloadFile
  verifyFile
  installFile
fi
testVersion
cleanup

if [ "${DDUS_EXECUTE}" == "true" ]; then
  dev-deployment-upload-service
fi