export class Configuration {
  settings = [];

  init(settings) {
    this.settings = settings;
  }

  getSetting(name) {
    const setting = this.settings.find((value) => value.name === name);

    return setting.value;
  }
}
