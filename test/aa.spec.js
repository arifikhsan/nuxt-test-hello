import { setupTest } from "@nuxt/test-utils";

describe("My test", () => {
  setupTest({
    server: true,
    setupTimeout: 5 * 60 * 1000
  });

  // setupTest({ browser: true })

  test("my test", async () => {
    // ...
    expect(1 + 1).toEqual(2);
  });
});
