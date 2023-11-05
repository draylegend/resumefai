import { test, expect } from '@playwright/test';

test('has router-outlet', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('router-outlet')).toHaveCount(1);
});
