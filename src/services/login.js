import SELECTORS from "../selectors";

export default async function login(page) {
  await page.goto("https://eboleta.sii.cl", { waitUntil: "networkidle2" });

  await page.type(SELECTORS.LOGIN.RUT_INPUT, process.env.RUT, { delay: 100 });
  await page.type(SELECTORS.LOGIN.PASSWORD_INPUT, process.env.PASSWORD, {
    delay: 100,
  });

  await Promise.all([
    page.click(SELECTORS.LOGIN.LOGIN_BUTTON),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  console.log("Sesión iniciada correctamente.");
}
