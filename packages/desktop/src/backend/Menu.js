"use strict";
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var electron_1 = require("electron");
var path = require("path");
var FileOperations_1 = require("./FileOperations");
var Menu = (function () {
  function Menu(window, userData, desktopI18n) {
    var _this = this;
    this.window = window;
    this.userData = userData;
    this.fileOperations = new FileOperations_1.FileOperations(window, this, userData, desktopI18n);
    this.i18n = desktopI18n.getCurrent();
    this.initializeMenuProperties();
    electron_1.ipcMain.on("setFileMenusEnabled", function (event, data) {
      _this.setFileMenusEnabled(data.enabled);
    });
  }
  Menu.prototype.initializeMenuProperties = function () {
    var _this = this;
    this.newMenu = {
      label: this.i18n.terms.new,
      submenu: [
        {
          label: this.i18n.names.bpmn,
          click: function () {
            _this.fileOperations.newFile("bpmn");
          },
        },
        {
          label: this.i18n.names.dmn,
          click: function () {
            _this.fileOperations.newFile("dmn");
          },
        },
      ],
    };
    this.openMenu = {
      label: this.i18n.terms.open,
      submenu: [
        {
          label: this.i18n.terms.file,
          accelerator: "CmdOrCtrl+O",
          click: function () {
            electron_1.dialog
              .showOpenDialog(_this.window, {
                title: _this.i18n.menu.open.submenu.file.title,
                filters: [
                  {
                    name: _this.i18n.menu.open.submenu.file.supported,
                    extensions: ["bpmn", "bpmn2", "dmn"],
                  },
                ],
              })
              .then(function (result) {
                if (result && !result.canceled) {
                  _this.fileOperations.openFile(result.filePaths[0]);
                }
              });
          },
        },
        {
          label: this.i18n.menu.open.submenu.sample,
          submenu: [
            {
              label: this.i18n.names.bpmn,
              click: function () {
                _this.fileOperations.openSample(path.join(__dirname, "samples/sample.bpmn"));
              },
            },
            {
              label: this.i18n.names.dmn,
              click: function () {
                _this.fileOperations.openSample(path.join(__dirname, "samples/sample.dmn"));
              },
            },
          ],
        },
      ],
    };
    this.saveMenu = {
      label: this.i18n.terms.save,
      accelerator: "CmdOrCtrl+S",
      click: function () {
        _this.fileOperations.saveFile();
      },
      enabled: false,
    };
    this.saveAsMenu = {
      label: this.i18n.menu.saveAs,
      accelerator: "CmdOrCtrl+Shift+S",
      click: function () {
        _this.fileOperations.saveFileAs();
      },
      enabled: false,
    };
    this.savePreviewAsMenu = {
      label: this.i18n.menu.savePreviewAs,
      click: function () {
        _this.window.webContents.send("savePreview");
      },
      enabled: false,
    };
    this.closeWindowMenu = {
      label: this.i18n.menu.closeWindow,
      accelerator: "Command+W",
      click: function () {
        _this.window.close();
      },
    };
    this.quitMenu = {
      label: this.i18n.terms.quit,
      accelerator: "CmdOrCtrl+Q",
      click: function () {
        electron_1.app.quit();
      },
    };
    this.fileMenu = {
      label: this.i18n.terms.file,
      submenu: [
        this.newMenu,
        this.openMenu,
        this.saveMenu,
        this.saveAsMenu,
        this.savePreviewAsMenu,
        {
          type: "separator",
        },
        this.quitMenu,
      ],
    };
    this.macOsFileMenu = {
      label: this.i18n.terms.file,
      submenu: [
        this.newMenu,
        this.openMenu,
        this.saveMenu,
        this.saveAsMenu,
        this.savePreviewAsMenu,
        {
          type: "separator",
        },
        this.closeWindowMenu,
      ],
    };
    this.macOsAppMenu = {
      label: this.i18n.names.businessModeler.name,
      submenu: [
        {
          label: this.i18n.menu.macOsAppMenu.submenu.about,
          role: "about",
        },
        {
          type: "separator",
        },
        {
          label: this.i18n.menu.macOsAppMenu.submenu.services,
          role: "services",
          submenu: [],
        },
        {
          type: "separator",
        },
        {
          label: this.i18n.menu.macOsAppMenu.submenu.hide,
          accelerator: "Command+H",
          role: "hide",
        },
        {
          label: this.i18n.menu.macOsAppMenu.submenu.hideOthers,
          accelerator: "Command+Alt+H",
          role: "hideOthers",
        },
        {
          label: this.i18n.menu.macOsAppMenu.submenu.showAll,
          role: "unhide",
        },
        {
          type: "separator",
        },
        {
          label: this.i18n.terms.quit,
          accelerator: "Command+Q",
          click: function () {
            return electron_1.app.quit();
          },
        },
      ],
    };
    this.editMenu = {
      label: this.i18n.terms.edit,
      submenu: [
        {
          label: this.i18n.menu.edit.submenu.label,
          click: function () {
            _this.window.webContents.send("copyContentToClipboard");
          },
        },
        { label: this.i18n.terms.undo, accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: this.i18n.terms.redo, accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { label: this.i18n.terms.cut, accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: this.i18n.terms.copy, accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: this.i18n.terms.paste, accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: this.i18n.menu.edit.submenu.selectAll, accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
      ],
    };
    this.devMenu = {
      label: this.i18n.menu.devMenu.label,
      submenu: [
        {
          label: this.i18n.menu.devMenu.submenu.showDevTools,
          click: function () {
            _this.window.webContents.openDevTools();
          },
        },
        {
          label: this.i18n.menu.devMenu.submenu.clearUserData,
          click: function () {
            _this.userData.clear();
          },
        },
      ],
    };
  };
  Menu.prototype.setFileMenusEnabled = function (enabled) {
    this.getMenuItem(this.i18n.terms.save, this.menu).enabled = enabled;
    this.getMenuItem(this.i18n.menu.saveAs, this.menu).enabled = enabled;
    this.getMenuItem(this.i18n.menu.savePreviewAs, this.menu).enabled = enabled;
    this.getMenuItem(this.i18n.menu.edit.submenu.label, this.menu).enabled = enabled;
  };
  Menu.prototype.getMenuItem = function (label, menuToSearch) {
    var e_1, _a;
    try {
      for (var _b = __values(menuToSearch.items), _c = _b.next(); !_c.done; _c = _b.next()) {
        var menuItem = _c.value;
        if (menuItem.label === label) {
          return menuItem;
        } else if (menuItem.submenu) {
          var childMenuItem = this.getMenuItem(label, menuItem.submenu);
          if (childMenuItem) {
            return childMenuItem;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return undefined;
  };
  Menu.prototype.setup = function () {
    var template = [process.platform === "darwin" ? this.macOsFileMenu : this.fileMenu, this.editMenu];
    if (process.platform === "darwin") {
      template.unshift(this.macOsAppMenu);
    }
    if (!electron_1.app.isPackaged) {
      template.push(this.devMenu);
    }
    this.menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(this.menu);
    if (process.platform !== "darwin") {
      this.getMenuItem(this.i18n.terms.undo, this.menu).visible = false;
      this.getMenuItem(this.i18n.terms.redo, this.menu).visible = false;
      this.getMenuItem(this.i18n.terms.cut, this.menu).visible = false;
      this.getMenuItem(this.i18n.terms.copy, this.menu).visible = false;
      this.getMenuItem(this.i18n.terms.paste, this.menu).visible = false;
      this.getMenuItem(this.i18n.menu.edit.submenu.selectAll, this.menu).visible = false;
    }
  };
  return Menu;
})();
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
