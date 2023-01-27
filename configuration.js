export class Configuration {
  settings = {};

  init(settings) {
    this.settings = settings;
  }

  getLanguage() {
    return this.settings["language"];
  }

  getDebug() {
    return this.settings["debug"];
  }
}
