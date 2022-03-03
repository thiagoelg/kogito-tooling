"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.en = void 0;
var i18n_common_dictionary_1 = require("@kie-tools/i18n-common-dictionary");
var core_1 = require("@kie-tools-core/i18n/dist/core");
exports.en = __assign(__assign({}, i18n_common_dictionary_1.en), {
  editorPage: {
    textEditorModal: {
      title: function (fileName) {
        return "Editing ".concat(fileName);
      },
    },
    alerts: {
      setContentError: {
        title: "Error opening file. You can edit it as text and reopen the diagram after you've fixed it.",
        action: "Open as text",
      },
      copy: "Content copied to clipboard",
      updateGist: "Gist successfully updated.",
      createGist: "Gist successfully created.",
      errorPushingGist: "Failed to push an update to your current Gist. Attempt to force push?",
      forcePushWarning: "WARNING: This will overwrite your Gist with the local changes!",
      invalidCurrentGist: "Your current gist "
        .concat(
          i18n_common_dictionary_1.en.names.url,
          " is invalid. If you've updated its filename, it's necessary to update your "
        )
        .concat(i18n_common_dictionary_1.en.names.url, " as well."),
      invalidGistFilename: "Invalid filename. This gist already has a file with this name.",
      error: "An error occurred trying to perform the last operation. Check if your ".concat(
        i18n_common_dictionary_1.en.names.github,
        " token is still valid and try again later."
      ),
      unsaved: {
        titleLocal: "You have new changes since your last download.",
        titleGit: "You have new changes since your last push.",
        proceedAnyway: "Proceed anyway",
        message: "Your files are temporarily persisted on your browser, but may be erased before you come back.",
      },
    },
  },
  editorToolbar: {
    closeAndReturnHome: "Close and return Home",
    saveAndDownload: "Save & Download",
    sendChangesToGitHub: "Send changes to ".concat(i18n_common_dictionary_1.en.names.github),
    copySource: "Copy Source",
    downloadSVG: ""
      .concat(i18n_common_dictionary_1.en.terms.download, " ")
      .concat(i18n_common_dictionary_1.en.names.svg),
    setGitHubToken: "Setup",
    createGist: "Create Gist",
    cantCreateGistTooltip:
      "You can't create a Gist because you're either not logged in, or your models are in nested directories.",
    cantUpdateGistTooltip:
      "You can't update your Gist because you're either not logged in, not the owner, or your models are in nested directories.",
    share: "Share",
    embed: "Embed",
  },
  dmnDevSandbox: {
    common: {
      deployYourModel: "Deploy",
      deployInstanceInfo: "Deploy instance information",
      disclaimer:
        "When you set up the required information, you are able to deploy decision models on your configured instance. All the information you provide is locally stored as browser cookies and they are never shared with anyone.",
      learnMore: "Learn more",
      requiredField: "This field cannot be empty.",
      deploying: "Deploying ...",
      saving: "Saving ...",
      setupFirst: "Set up your ".concat(
        i18n_common_dictionary_1.en.names.dmnDevSandbox,
        " to be able to deploy your models"
      ),
    },
    dropdown: {
      noDeployments: "Your deployments show up here",
      connectedTo: function (username) {
        return "Connected to  '".concat(username, "'");
      },
      item: {
        upTooltip: "This deployment is up and running.",
        downTooltip: "This deployment is not running.",
        inProgressTooltip: "This deployment is in progress and it will be available shortly.",
        errorTooltip:
          "Some unexpected error happened during the deploy process. Check the logs in your instance for further information.",
        createdAt: function (date) {
          return "Created at ".concat(date);
        },
      },
    },
    configModal: {
      hostInfo: "The hostname associated with your instance.",
      namespaceInfo: "The namespace (project) you want to deploy the Decision Model.",
      tokenInfo: "The token associated with your instance.",
      validationError: "You must fill out all required fields before you can proceed.",
      connectionError: "Connection refused. Please check the information provided.",
      configExpiredWarning: "Token or account expired. Please update your configuration.",
      useWizard: "Configure through the guided wizard instead",
    },
    confirmModal: {
      title: "Deploy",
      body: "Are you sure you want to deploy your model to your instance? This action will take a few minutes to be completed and you will need to create a new deployment if you update your model.",
    },
    alerts: {
      deployStartedError:
        "Something went wrong when creating your deployment. Please check your configuration and try again.",
      deployStartedSuccess:
        "Your deployment has been successfully started and will be available shortly. Please do not close your browser tab until this operation is completed.",
    },
    introduction: {
      explanation: "Deploy your decision models to a cloud instance on ".concat(
        i18n_common_dictionary_1.en.names.devSandbox,
        " and share with others."
      ),
      disclaimer: ""
        .concat(i18n_common_dictionary_1.en.names.dmnDevSandbox, " is intended for ")
        .concat("development".bold(), " and should not be used for business-critical workloads."),
      getStarted: "To get started, configure your instance information.",
    },
    configWizard: {
      header: {
        provider: "Provider",
      },
      steps: {
        first: {
          name: "Create your instance",
          introduction: "In order to create your ".concat(
            i18n_common_dictionary_1.en.names.shortDevSandbox,
            " instance:"
          ),
          goToGetStartedPage: "Go to the Get Started page",
          followSteps: "Follow the steps to launch your instance. You will be asked to log in with your ".concat(
            i18n_common_dictionary_1.en.names.redHat,
            " account."
          ),
          informNamespace:
            "Once your instance is up and running, inform the namespace (project) in your cluster you want to have the Decision Model deployed to.",
          inputReason:
            "This information is necessary for deploying your Decision Model into the right project namespace.",
          namespacePlaceholder: "The namespace (project) you want to deploy the Decision Model.",
        },
        second: {
          name: "Set credentials",
          introduction: "In your ".concat(i18n_common_dictionary_1.en.names.shortDevSandbox, " instance:"),
          accessLoginCommand: "Click on your username on the top right corner and then ".concat(
            "'Copy login command'".bold(),
            "."
          ),
          accessDisplayToken: "If asked, log in with "
            .concat("'DevSandbox'".bold(), ", and then access the ")
            .concat("'Display Token'".bold(), " link."),
          copyInformation: "In "
            .concat("'Log in with this token'".bold(), " section, copy your ")
            .concat("'--server'".bold(), " and ")
            .concat("'--token'".bold(), " values, and paste them below."),
          inputReason: "This information is necessary for establishing a connection with your instance.",
          hostPlaceholder: "Paste the --server value here",
          tokenPlaceholder: "Paste the --token value here",
        },
        final: {
          name: "Connect",
          connectionSuccess: "Connection successfully established.",
          connectionError: "Connection refused.",
          introduction: "Now you are able to deploy DMN decisions to your OpenShift instance.",
          configNote: "Your configuration will be stored as browser cookies after the operations above.",
          connectionErrorLong: "A connection with your ".concat(
            i18n_common_dictionary_1.en.names.shortDevSandbox,
            " instance could not be established."
          ),
          checkInfo: "Please check the information provided and try again.",
          possibleErrorReasons: {
            introduction: "Here are some possible reasons:",
            emptyField: "One or more required information are not filled.",
            instanceExpired:
              "Instances expire in 30 days. After this period, you will need to recreate it, thus receiving a new host.",
            tokenExpired: "Tokens expire on a daily basis.",
          },
        },
      },
    },
  },
  embedModal: {
    title: "Embed",
    description:
      "Embed the editor and content in your page. Choose the options below and copy the embed code to your clipboard:",
    copy: "Copy",
    source: {
      current: {
        label: "Current content",
        description: "The embedded Editor will contain the current content, so it cannot be changed externally.",
      },
      gist: {
        tooltip: "Only available when editing a file from a ".concat(
          i18n_common_dictionary_1.en.names.github,
          " gist."
        ),
        label: "".concat(i18n_common_dictionary_1.en.names.github, " gist"),
        description:
          "The embedded Editor will fetch the content from the open gist. Changes made to this gist will be reflected in the Editor.",
      },
    },
    embedCode: "Embed code",
    copiedToClipboard: "Copied to clipboard",
  },
  githubTokenModal: {
    header: {
      title: ""
        .concat(i18n_common_dictionary_1.en.names.github, " ")
        .concat(i18n_common_dictionary_1.en.names.oauth, " ")
        .concat(i18n_common_dictionary_1.en.terms.token),
      subtitle: "Set up your ".concat(
        i18n_common_dictionary_1.en.names.github,
        " token so you can create and update gist."
      ),
    },
    footer: {
      createNewToken: "Create a new token",
      placeHolder: "Paste your token here",
    },
    body: {
      disclaimer: "The token you provide is locally stored as a browser cookie and is never shared with anyone.",
      learnMore: "Learn more about ".concat(i18n_common_dictionary_1.en.names.github, " tokens"),
      note: "You should provide a token with the ".concat("'gist'".bold(), " permission."),
    },
  },
  homePage: {
    uploadFile: {
      header: "Edit existing file",
      body: "Upload your "
        .concat(i18n_common_dictionary_1.en.names.bpmn, ", ")
        .concat(i18n_common_dictionary_1.en.names.dmn, " or ")
        .concat(i18n_common_dictionary_1.en.names.pmml, " file here to start making new edits!"),
      helperText: "Upload a ."
        .concat(i18n_common_dictionary_1.en.names.bpmn, ", .")
        .concat(i18n_common_dictionary_1.en.names.bpmn, "2, .")
        .concat(i18n_common_dictionary_1.en.names.dmn, " or .")
        .concat(i18n_common_dictionary_1.en.names.pmml, " file"),
      helperInvalidText: "File extension is not supported",
      placeholder: "Drag a file or browse for it.",
    },
    openUrl: {
      validating: "Validating ".concat(i18n_common_dictionary_1.en.names.url),
      invalidGistExtension: "File type on the provided gist is not supported.",
      invalidExtension: "File type on the provided ".concat(
        i18n_common_dictionary_1.en.names.url,
        " is not supported."
      ),
      invalidGist: "Enter a valid gist "
        .concat(i18n_common_dictionary_1.en.names.url, ". If you're using a specific gist ")
        .concat(
          i18n_common_dictionary_1.en.names.url,
          " remember its name can't have whitespaces and upper-case letters."
        ),
      invalidUrl: "This ".concat(i18n_common_dictionary_1.en.names.url, ' is not valid (don\'t forget "https://"!).'),
      notFoundUrl: "This ".concat(i18n_common_dictionary_1.en.names.url, " does not exist."),
      corsNotAvailable: "This ".concat(
        i18n_common_dictionary_1.en.names.url,
        " cannot be opened because it doesn't allow other websites to access it."
      ),
      openFromSource: "Open from source",
      description: "Paste a "
        .concat(i18n_common_dictionary_1.en.names.url, " to a source code link (")
        .concat(i18n_common_dictionary_1.en.names.github, ", ")
        .concat(i18n_common_dictionary_1.en.names.dropbox, ", etc.)"),
    },
    dropdown: {
      getHub: "Get ".concat(i18n_common_dictionary_1.en.names.businessModeler.hub),
      onlineForum: "Online forum",
    },
    bpmnCard: {
      title: "Workflow (.".concat(i18n_common_dictionary_1.en.names.bpmn, ")"),
      explanation: "".concat(i18n_common_dictionary_1.en.names.bpmn, " files are used to generate Workflows."),
      createNew: "Create new workflow",
    },
    dmnCard: {
      title: "Decision model (.".concat(i18n_common_dictionary_1.en.names.dmn, ")"),
      explanation: "".concat(i18n_common_dictionary_1.en.names.dmn, " files are used to generate decision models"),
      createNew: "Create new decision model",
    },
    pmmlCard: {
      title: "Scorecard model (.".concat(i18n_common_dictionary_1.en.names.pmml, ")"),
      explanation: "".concat(i18n_common_dictionary_1.en.names.pmml, " files are used to generate scorecards"),
      createNew: "Create new Scorecard",
    },
    trySample: "Try Sample",
    chooseLocalFile: "Choose a local file",
  },
  guidedTour: {
    init: {
      title: "Welcome to the ".concat(i18n_common_dictionary_1.en.names.dmn, " Editor"),
      learnMore: "Take this 5-minute tour to learn more about the ".concat(
        i18n_common_dictionary_1.en.names.dmn,
        " Editor in a brief and interactive way."
      ),
      dmnRunnerIntro: "If you already know your way around the "
        .concat(
          i18n_common_dictionary_1.en.names.dmn,
          " Editor, you can skip this tour and start executing your models with the "
        )
        .concat(i18n_common_dictionary_1.en.names.dmnRunner, "."),
      takeTour: "Take tour",
      skipTour: "Skip tour",
      skipTourAndUseDmnRunner: "Skip tour and start ".concat(i18n_common_dictionary_1.en.names.dmnRunner),
    },
    end: {
      title: "Congratulations",
      motivational: "Now you know how each part of the ".concat(
        i18n_common_dictionary_1.en.names.dmn,
        " Editor works, and you're empowered to go ahead and explore!"
      ),
      nextSteps: {
        title: "As next steps, you can try to",
        firstStep: "Connect the ".concat("Age".bold(), " input with the ").concat("Can drive?".bold(), " decision;"),
        secondStep: "Define the decision logic in the "
          .concat("Can drive?".bold(), " node to return ")
          .concat("true".bold(), " when ")
          .concat("Age".bold(), " is\n              greater than ")
          .concat("21".bold(), ", otherwise ")
          .concat("false".bold(), ";"),
        thirdStep: "Execute the model.",
        startDmnRunner: "Start ".concat(i18n_common_dictionary_1.en.names.dmnRunner),
      },
      findUsefulInfo: "You can find useful information in the",
      learnDMN: "Learn ".concat(i18n_common_dictionary_1.en.names.dmn, " in 15 minutes"),
      courseOr: "course or in the",
      kogitoDoc: "".concat(i18n_common_dictionary_1.en.names.kogito, " documentation"),
      finish: "Finish the Tour",
    },
  },
  alerts: {
    gistError:
      "Not able to open this Gist. If you have updated your Gist filename it can take a few seconds until the URL is available to be used.",
    goToHomePage: "Go to Home Page",
    errorDetails: "Error details:",
    responseError: {
      title: "An error happened while fetching your file",
    },
    fetchError: {
      title: "An unexpected error happened while trying to fetch your file",
      possibleCauses: "Possible causes:",
      missingGitHubToken:
        'If you\'re trying to open a private file, make sure to set your GitHub token before. To do it use one of the Editor pages and open the "Set your GitHub token" modal under the Share dropdown.',
      cors: "The URL to your file must allow CORS in its response, which should contain the following header:",
    },
  },
  dmnRunner: {
    drawer: {
      error: {
        title: "".concat(i18n_common_dictionary_1.en.terms.oops, "!"),
        explanation: "The ".concat(
          i18n_common_dictionary_1.en.names.dmnRunner,
          " drawer couldn't be rendered due to an error."
        ),
        message: [
          "This ".concat(
            i18n_common_dictionary_1.en.names.dmn,
            " has a construct that is not supported. Please refer to "
          ),
          (0, core_1.wrapped)("jira"),
          " and report an issue. Don't forget to upload the current file, and the used inputs",
        ],
      },
    },
    modal: {
      initial: {
        runDmnModels: "Run your models and see live forms and results as you edit.",
        explanation:
          "Input nodes become interactive fields on an auto-generated form, and the results are displayed as easy-to-read cards.",
        notificationPanelExplanation: [
          "The Notifications Panel ",
          (0, core_1.wrapped)("icon"),
          ", at the bottom-right corner of the Editor, displays live Execution messages to assist modeling your decisions.",
        ],
      },
      wizard: {
        title: ""
          .concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " ")
          .concat(i18n_common_dictionary_1.en.terms.setup),
        description: "Choose your "
          .concat(i18n_common_dictionary_1.en.terms.os.full, " and follow the instructions to install and start the ")
          .concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, "."),
        outdatedAlert: {
          title: "".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " is outdated!"),
          message: "It looks like you're using an incompatible version of the ".concat(
            i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
            ". Follow the instructions below to update."
          ),
        },
        stoppedAlert: {
          title: "".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " has stopped!"),
          message: "It looks like the ".concat(
            i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
            " has suddenly stopped, please follow these instructions to start it again."
          ),
        },
        macos: {
          install: {
            download: " ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, "."),
            openFile: ["Open the ", (0, core_1.wrapped)("file"), " file."],
            dragFileToApplicationsFolder: [
              "Drag ",
              (0, core_1.wrapped)("file"),
              " to the ",
              (0, core_1.wrapped)("folder"),
              " folder.",
            ],
          },
          start: {
            stopped: {
              startInstruction: "If you see the "
                .concat(
                  i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                  ' icon on your system bar, simply click it and select "'
                )
                .concat(i18n_common_dictionary_1.en.terms.start, '".'),
              launchKieSandboxExtendedServices: [
                "If not, start the ".concat(
                  i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                  " app by launching "
                ),
                (0, core_1.wrapped)("file"),
                ".",
              ],
            },
            firstTime: {
              title: "If you just installed ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, ":"),
              openApplicationsFolder: ["Open the ", (0, core_1.wrapped)("folder"), " folder."],
              again: "again",
              openAndCancel: [
                "Right-click on ",
                (0, core_1.wrapped)("file"),
                ' select "'
                  .concat(i18n_common_dictionary_1.en.terms.open, '" and then "')
                  .concat(i18n_common_dictionary_1.en.terms.cancel, '".'),
              ],
              openInstruction: [
                "Right-click on ",
                (0, core_1.wrapped)("file"),
                " ",
                (0, core_1.wrapped)("again"),
                ' and then select "'.concat(i18n_common_dictionary_1.en.terms.open, '".'),
              ],
            },
            alreadyRanBefore: "If you already installed and ran the ".concat(
              i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
              " before:"
            ),
            launchKieSandboxExtendedServices: ["Launch the ", (0, core_1.wrapped)("file")],
            advanced: {
              title: "Advanced Settings",
              runFollowingCommand: "Run the following command on a Terminal tab to start ".concat(
                i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                " on a different port:"
              ),
            },
          },
        },
        windows: {
          install: {
            keepDownload: " ".concat(
              i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
              '. Note that you\'ll probably have to right-click the download and choose "Keep"'
            ),
            moveTheFile: ["Move the ", (0, core_1.wrapped)("file"), " file to your preferred folder."],
          },
          start: {
            stopped: {
              startInstruction: "If you see the "
                .concat(
                  i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                  ' icon on your system bar, simply click it and select "'
                )
                .concat(i18n_common_dictionary_1.en.terms.start, '".'),
              launchKieSandboxExtendedServices: [
                "If not, start the ".concat(
                  i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                  " by opening the "
                ),
                (0, core_1.wrapped)("file"),
                "file.",
              ],
            },
            firstTime: {
              title: "If you just installed ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, ":"),
              openFolder: ["Open folder where you placed the ", (0, core_1.wrapped)("file"), " file."],
              runAnyway: 'Double-click it and select "More info" then click on the "Run anyway" button.',
            },
            alreadyRanBefore: "If you already installed and ran the ".concat(
              i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
              " before:"
            ),
            launchKieSandboxExtendedServices: ["Open the ", (0, core_1.wrapped)("file"), " file."],
            advanced: {
              title: "Advanced Settings",
              runFollowingCommand: "Run the following command on the Command prompt to start ".concat(
                i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
                " on a different port:"
              ),
            },
          },
        },
        linux: {
          install: {
            download: " ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, "."),
            installAppIndicator: "Install the AppIndicator lib for your system:",
            ubuntuDependency: [
              "".concat(i18n_common_dictionary_1.en.names.ubuntu, ": "),
              (0, core_1.wrapped)("package"),
            ],
            fedoraDependency: [
              "".concat(i18n_common_dictionary_1.en.names.fedora, ": "),
              (0, core_1.wrapped)("package"),
            ],
            extractContent: ["Extract the contents of ", (0, core_1.wrapped)("file"), " to your location of choice."],
            binaryExplanation: [
              "The ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " binary, "),
              (0, core_1.wrapped)("file"),
              ", is a single binary file, which means you can add it to your PATH or even configure it to execute when your computer starts.",
            ],
          },
          start: {
            openTerminal: "Open a Terminal window.",
            goToFolder: ["Go to the folder where you placed the ", (0, core_1.wrapped)("file"), " binary."],
            runCommand: "Run ",
            advanced: {
              title: "Advanced Settings",
              runFollowingCommand: [
                "Open a Terminal window and run the following command on the directory where you placed the ",
                (0, core_1.wrapped)("file"),
                " binary:",
              ],
            },
          },
        },
        footerWaitingToConnect: "Waiting to connect to ".concat(
          i18n_common_dictionary_1.en.names.kieSandboxExtendedServices
        ),
        advancedSettings: {
          title: [
            "The default ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " port is "),
            (0, core_1.wrapped)("port"),
            ". If you're already using this port for another application, you can change the port used to connect with the ".concat(
              i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
              "."
            ),
          ],
          label: "Port",
          helperTextInvalid: "Invalid port. Valid ports: 0 <= port <= 65353",
        },
      },
      use: {
        title: "All set! 🎉",
        connected: "You're connected to the ".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, "."),
        fillTheForm: "Fill the Form on the Inputs column and automatically see the results on the Outputs column.",
        deployTheModel: "You can also deploy your model to the ".concat(
          i18n_common_dictionary_1.en.names.dmnDevSandbox,
          " when you're done editing."
        ),
        backToEditor: "Back to Editor",
        setupDmnDevSandbox: "Set up the ".concat(i18n_common_dictionary_1.en.names.dmnDevSandbox),
        dmnDevSandboxAlreadySetup: "".concat(i18n_common_dictionary_1.en.names.dmnDevSandbox, " already set up"),
      },
    },
    dropdown: {
      label: "".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices),
      setup: ""
        .concat(i18n_common_dictionary_1.en.terms.setup, " ")
        .concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices),
      open: ""
        .concat(i18n_common_dictionary_1.en.terms.open, " ")
        .concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " panel"),
      close: ""
        .concat(i18n_common_dictionary_1.en.terms.close, " ")
        .concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " panel"),
    },
    button: {
      available: "This is only available in ".concat(i18n_common_dictionary_1.en.names.chrome, " at the moment"),
    },
  },
  notificationsPanel: {
    name: "Notifications Panel",
    tooltip: {
      retractAll: "Retract All",
      expandAll: "Expand All",
    },
  },
  kieSandboxExtendedServices: {
    dropdown: {
      shortConnected: function (port) {
        return "Connected to port ".concat(port);
      },
      tooltip: {
        connected: "".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " is connected."),
        install: "Setup ".concat(
          i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
          " to use this feature. Click to install."
        ),
        outdated: "".concat(
          i18n_common_dictionary_1.en.names.kieSandboxExtendedServices,
          " is outdated. Click to update."
        ),
        disconnected: "".concat(i18n_common_dictionary_1.en.names.kieSandboxExtendedServices, " is disconnected."),
      },
    },
    modal: {
      initial: {
        subHeader: "Augment the ".concat(i18n_common_dictionary_1.en.names.dmn, " editor"),
      },
    },
  },
});
//# sourceMappingURL=en.js.map
