import sleep from "../utils/sleep.js";
import SELECTORS from "../selectors";
import calculatorSelectorHTML from "../utils/calculatorSelectorHTML.js";
import fillDetail from "./fillDetail.js";
import fillReceiver from "./fillReceiver.js";

export default async function emitBoleta(
  page,
  { amount, detail, rut, name, email }
) {
  await page.waitForSelector(SELECTORS.EMIT.AMOUNT_BUTTON);

  for (const digit of amount.toString()) {
    const selector = calculatorSelectorHTML(parseInt(digit));
    await page.click(selector);
  }

  // Descansamos un ratito
  await sleep(2500);
  await page.click(SELECTORS.EMIT.AMOUNT_BUTTON);

  if (detail) {
    await sleep(2000);
    await fillDetail(page, detail);
  }

  if (rut && name && email) {
    await sleep(2000);
    await fillReceiver(page, { rut, name, email });
  }

  // Emitimos la boleta
  await page.waitForSelector(SELECTORS.EMIT.EMIT_BUTTON);
  await page.click(SELECTORS.EMIT.EMIT_BUTTON);

  // Extraemos la url del PDF
  await page.waitForSelector(SELECTORS.EMIT.PDF_LINK)
  const pdfLink = await page.$eval(SELECTORS.EMIT.PDF_LINK, el => el.href)

  // Folio que esta entre _folio[folio]_
  const folio = pdfLink.match(/folio(\d+)/)[1]

  return { pdfLink, folio }
}
