describe("Login", () => {
  // success
  test("good email and password", async () => {
    const email = "abc@gmail.com";
    const password = "pwd";
    const login = await page.$("#login");
    const emailplace = await login.$("#email");
    const passwordplace = await login.$("#password");
    const submit = await login.$("#submit");

    await emailplace.type(email);
    await passwordplace.type(password);
    await submit.click();

    await page.waitForNavigation();
    expect(page.url()).toContain("/dashboard");
  });

  // unsuccessful
  test("wrong email and password", async () => {
    const email = "wrong-email";
    const password = "wrongpassword";
    const login = await page.$("#login");
    const emailplace = await login.$("#email");
    const passwordplace = await login.$("#password");
    const submit = await login.$("#submit");

    await emailplace.type(email);
    await passwordplace.type(password);
    await submit.click();

    const error = await login.$("#error");
    expect(error).not.toBeNull();
  });

  // wrong email
  test("wrong email", async () => {
    const email = "wrong-email";
    const password = "pwd";
    const login = await page.$("#login");
    const emailplace = await login.$("#email");
    const passwordplace = await login.$("#password");
    const submit = await login.$("#submit");

    await emailplace.type(email);
    await passwordplace.type(password);
    await submit.click();

    const error = await loginForm.$("#error");
    expect(error).not.toBeNull();
  });

  // wrong password
  test("wrong password", async () => {
    const email = "abc@gmail.com";
    const password = "wrongpassword";
    const login = await page.$("#login");
    const emailplace = await login.$("#email");
    const passwordplace = await login.$("#password");
    const submit = await login.$("#submit");

    await emailplace.type(email);
    await passwordplace.type(password);
    await submit.click();

    const error = await loginForm.$("#error");
    expect(error).not.toBeNull();
  });

  // empty email and password
  test("empty email and password", async () => {
    const login = await page.$("#login");
    const submit = await login.$("#submit");

    await submit.click();

    const error = await login.$("#error");
    expect(error).not.toBeNull();
  });

  // empty password
  test("empty password", async () => {
    const email = "abc@gmail.com";
    const login = await page.$("#login");
    const emailplace = await login.$("#email");
    const submit = await login.$("#submit");

    await emailplace.type(email);
    await submit.click();

    const error = await loginForm.$("#error");
    expect(error).not.toBeNull();
  });

  // empty email
  test("empty email", async () => {
    const password = "pwd";
    const login = await page.$("#login");
    const passwordplace = await login.$("#password");
    const submit = await login.$("#submit");

    await passwordplace.type(password);
    await submit.click();

    const error = await loginForm.$("#error");
    expect(error).not.toBeNull();
  });
});
