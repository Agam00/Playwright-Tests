import { test, expect } from "@playwright/test";

test.describe("Test Case 4 : Logout User", () => {
  test("login the existing user then logout", async ({ page }) => {
    const userName = "Agam";
    const userEmail = "agam@test.com";
    const password = "Test@12345";

    //login with existing user
    await page.goto("/");
    await expect(
      page.locator('img[alt="Website for automation practice"]'),
    ).toBeVisible();

    await page.click('a[href="/login"]');
    await expect(page.getByText("Login to your account")).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill(userEmail);
    await page.locator('input[data-qa="login-password"]').fill(password);
    await page.locator('button[data-qa="login-button"]').click();

    await expect(page.getByText(/Logged in as/i)).toContainText(userName);

    //logout

    await page.click('a[href="/logout"]');
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText("Login to your account")).toBeVisible();
  });
});
