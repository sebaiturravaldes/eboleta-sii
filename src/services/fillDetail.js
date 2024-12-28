import SELECTORS from "../selectors";

export default async function fillDetail(page, detail) {
  await page.waitForSelector(SELECTORS.EMIT.DETAIL_CHECK);
  await page.click(SELECTORS.EMIT.DETAIL_CHECK);

  await page.type(SELECTORS.EMIT.DETAIL_INPUT, detail, { delay: 100 });
}
