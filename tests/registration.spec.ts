import { test, expect } from "@playwright/test";
import { runSteps, configure } from "passmark";

configure({
  ai: {
    gateway: "openrouter",
  },
});

test("Test Case 1: Register User (Passmark)", async ({ page }) => {
  test.setTimeout(240_000);

  await runSteps({
    page,
    userFlow: "Register User, Verify Login, and Delete Account",
    steps: [
      {
        description: "Navigate to http://automationexercise.com",
        waitUntil: "Home page is visible",
      },

      {
        description: "Click on 'Signup / Login' button",
        waitUntil: "'New User Signup!' is visible",
      },

      {
        description:
          "Enter name '{{run.fullName}}' and email '{{run.email}}' in the New User Signup form",
      },

      {
        description: "Click 'Signup' button",
        waitUntil: "'ENTER ACCOUNT INFORMATION' is visible",
      },

      {
        description:
          "Fill account details: Select Title 'Mr.', enter Password 'Passmark!2026', and set Date of birth to '15 May 1990'",
      },

      {
        description: "Select checkbox 'Sign up for our newsletter!'",
      },
      {
        description:
          "Select checkbox 'Receive special offers from our partners!'",
      },

      {
        description:
          "Fill address details: First name 'John', Last name 'Doe', Company 'Acme Corp', Address '123 Tech Lane', Address2 'Suite 404', Country 'India', State 'Punjab', City 'Amritsar', Zipcode '143001', Mobile Number '9876543210'",
      },

      {
        description: "Click 'Create Account' button",
        waitUntil: "'ACCOUNT CREATED!' is visible",
      },

      {
        description: "Click 'Continue' button",
        waitUntil: "Text saying 'Logged in as {{run.fullName}}' is visible",
      },

      {
        description: "Click 'Delete Account' button",
        waitUntil: "'ACCOUNT DELETED!' is visible",
      },

      {
        description: "Click 'Continue' button",
      },
    ],
    assertions: [
      {
        assertion:
          "The user flow successfully navigated back to the home page or a standard post-deletion state after clicking continue.",
      },
    ],
    test,
    expect,
  });
});
