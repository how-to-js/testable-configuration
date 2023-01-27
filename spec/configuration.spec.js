import { Configuration } from "../configuration.js";

describe("Configuration", () => {
  let configuration;

  beforeEach(() => {
    configuration = new Configuration();
  });

  it("should return settings provided in init", () => {
    configuration.init([
      { name: "language", value: "en" },
      { name: "debug", value: false },
    ]);

    expect(configuration.getSetting("language")).toEqual("en");
    expect(configuration.getSetting("debug")).toEqual(false);

    // reinitiate with other values
    configuration.init([
      { name: "language", value: "es" },
      { name: "debug", value: true },
    ]);

    expect(configuration.getSetting("language")).toEqual("es");
    expect(configuration.getSetting("debug")).toEqual(true);
  });
});
