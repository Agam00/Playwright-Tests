import { test, expect } from "@playwright/test";

test.describe("Test Case 5: Register User with existing email", () => {
  test("Registering with incorrect credentials", async ({ page }) => {
    const userName = "Agam";
    const userEmail = "agam@test.com";

    await page.goto("/");
    await expect(
      page.locator('img[alt="Website for automation practice"]'),
    ).toBeVisible();

    await page.click('a[href="/login"]');
    await expect(page.getByText("New User Signup!")).toBeVisible();

    await page.locator('input[data-qa="signup-name"]').fill(userName);
    await page.locator('input[data-qa="signup-email"]').fill(userEmail);
    await page.locator('button[data-qa="signup-button"]').click();

    await expect(page.getByText("Email Address already exist!")).toBeVisible();
  });
});
