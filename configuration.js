export class Configuration {
  settings = [
    { name: "language", value: "en" },
    { name: "debug", value: false },
  ];

  getSetting(name) {
    const setting = this.settings.find((value) => value.name === name);

    return setting.value;
  }
}
