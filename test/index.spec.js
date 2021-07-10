import { get, setupTest } from "@nuxt/test-utils";

describe("My test 2", () => {
  setupTest({
    server: true,
    setupTimeout: 5 * 60 * 1000
  });

  test("my test", async () => {
    const { body } = await get('/')

    expect(body).toContain('hello')
  });
});
