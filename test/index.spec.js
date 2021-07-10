import { get, setupTest } from "@nuxt/test-utils";

describe("Index page", () => {
  setupTest({
    server: true,
    setupTimeout: 5 * 60 * 1000
  });

  test("it contain hello", async () => {
    const { body } = await get('/')

    expect(body).toContain('hello')
  });
});
