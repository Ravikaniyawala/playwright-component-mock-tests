import { test, expect } from '@playwright/test';

test('Example test with MSW', async ({ page }) => {
  await page.goto('/');
  const response = await page.request.get('/api/example');
  const data = await response.json();
  expect(data.message).toBe('Hello from MSW!');
});