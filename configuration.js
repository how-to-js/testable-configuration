export class Configuration {
  settings = {};

  init(settings) {
    this.settings = settings;
  }

  getSetting(name) {
    return this.settings[name];
  }
}
