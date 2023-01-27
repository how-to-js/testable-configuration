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

    expect(configuration.getLanguage()).toEqual("en");
    expect(configuration.getDebug()).toEqual(false);

    // reinitiate with other values
    configuration.init({
      language: "es",
      debug: true,
    });

    expect(configuration.getLanguage()).toEqual("es");
    expect(configuration.getDebug()).toEqual(true);
  });
});
