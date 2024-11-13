const { test, describe, expect, beforeEach } = require("@playwright/test");

describe("Pokedex", () => {
  beforeEach(async ({ page }) => {
    // Any setup you want before each test runs
  });

  test("front page can be opened", async ({ page }) => {
    await page.goto(""); // Provide the correct URL
    await expect(page.getByText("Ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });
});
