import { App, Plugin, Setting } from "obsidian";

declare module "obsidian" {
  interface App {
    commands: {
      executeCommandById: (id: string) => {};
    };
  }
}

interface MyPluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: "default"
};

export default class MyPlugin extends Plugin {
  settings: MyPluginSettings;

  async onload() {
    console.log("loading plugin");

    await this.loadSettings();

    this.registerObsidianProtocolHandler(
      "command",
      this.commandHandler.bind(this)
    );
  }

  onunload() {
    console.log("unloading plugin");
  }

  async commandHandler(params: { id: string }) {
    let commandId = params.id;
    this.app.commands.executeCommandById(commandId);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
