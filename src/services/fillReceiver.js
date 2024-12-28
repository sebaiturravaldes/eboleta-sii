import SELECTORS from "../selectors";
import sleep from "../utils/sleep.js";

export default async function fillReceiver(page, { rut, name, email }) {
  await page.waitForSelector(SELECTORS.EMIT.RECEIVER_CHECK);
  await page.click(SELECTORS.EMIT.RECEIVER_CHECK);

  await page.type(SELECTORS.EMIT.RUT_INPUT, rut, { delay: 100 });

  // Dejamos el campo para que se valide el rut
  await page.keyboard.press("Tab");
  // Esperamos a que se valide el rut
  await sleep(3000);

  await page.type(SELECTORS.EMIT.NAME_INPUT, name, { delay: 50 });
  await page.type(SELECTORS.EMIT.EMAIL_INPUT, email, { delay: 50 });
}
