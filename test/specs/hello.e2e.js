const HelloPage = require("../pageobjects/hello.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await HelloPage.open();
		await HelloPage.toggleTitle("hello")
    await expect(HelloPage.helloTitle).toBeExisting();
		await HelloPage.toggleBtn.click()
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

	it("should login with valid credentials", async () => {
    await HelloPage.open();
		await HelloPage.toggleTitle("aaa")
    await expect(HelloPage.helloTitle).not.toBeExisting();
		await HelloPage.toggleBtn.click()
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
