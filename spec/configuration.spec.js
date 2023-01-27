import { Configuration } from "../configuration.js";

describe("Configuration", () => {
  let configuration;

  beforeEach(() => {
    configuration = new Configuration();
  });

  it("should return hard-coded settings", () => {
    expect(configuration.getSetting("language")).toEqual("en");
    expect(configuration.getSetting("debug")).toEqual(false);
  });
});
