import { test, expect } from "@playwright/test";

test.describe("Test Case 3: Login User with incorrect email and password", () => {
  test("sign-in with incorrect credentials", async ({ page }) => {
    const userEmail = `testuser_${Date.now()}@test.com`;
    const password = "Test@12345";

    await page.goto("/");
    await expect(
      page.locator('img[alt="Website for automation practice"]'),
    ).toBeVisible();

    await page.click('a[href="/login"]');
    await expect(page.getByText("Login to your account")).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill(userEmail);
    await page.locator('input[data-qa="login-password"]').fill(password);
    await page.locator('button[data-qa="login-button"]').click();

    await expect(
      page.getByText("Your email or password is incorrect!"),
    ).toBeVisible();
  });
});
