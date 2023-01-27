import { Configuration } from "../configuration.js";

describe("Configuration", () => {
  let configuration;

  beforeEach(() => {
    configuration = new Configuration();
  });

  it("should return settings provided in init", () => {
    configuration.init({
      language: "en",
      debug: false,
    });

    expect(configuration.getSetting("language")).toEqual("en");
    expect(configuration.getSetting("debug")).toEqual(false);

    // reinitiate with other values
    configuration.init({
      language: "es",
      debug: true,
    });

    expect(configuration.getSetting("language")).toEqual("es");
    expect(configuration.getSetting("debug")).toEqual(true);
  });
});
