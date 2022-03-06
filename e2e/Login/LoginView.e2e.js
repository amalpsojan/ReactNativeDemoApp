/* eslint-disable no-undef */
describe('MyDemoApp E2E Testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should load Login screen', async () => {
    await expect(element(by.id('login-view-scene'))).toBeVisible();
  });

  it('should login fail', async () => {
    await element(by.id('login-view-email-input')).typeText(
      'amalpsojan@example.com',
    );
    await element(by.id('login-view-password-input')).typeText('12345678');
    await element(by.id('login-view-login-button')).tap();

    // await waitFor(element(by.id('login-text-error'))).toBeVisible();
  });

  // it('should login fail', async () => {
  //   await element(by.id('login-input-username')).typeText(
  //     'amalpsojan@example.com',
  //   );
  //   await element(by.id('login-input-password')).typeText('12345678');
  //   await element(by.id('login-button-login')).tap();

  //   await waitFor(element(by.id('login-text-error'))).toBeVisible();
  // });

  // it('should login successfully', async () => {
  //   await element(by.id('login-input-username')).clearText();
  //   await element(by.id('login-input-username')).typeText('amalpp@gmail.com');

  //   await element(by.id('login-input-password')).clearText();
  //   await element(by.id('login-input-password')).typeText('123456');

  //   await element(by.id('login-button-login')).tap();

  //   await waitFor(element(by.id('profile-screen')))
  //     .toBeVisible()
  //     .withTimeout(10000);
  // });

  // it('should load Profile screen', async () => {
  //   await expect(element(by.id('profile-screen'))).toBeVisible();
  // });
});
