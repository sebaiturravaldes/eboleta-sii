import puppeteer from "puppeteer";
import validateEnvironmentVariables from "./utils/validateEnvironmentVariables.js";
import login from "./services/login.js";
import emitBoleta from "./services/emitBoleta.js";
import dotenv from "dotenv";
dotenv.config();

main({
  amount: 10,
  detail: "Prueba de emisión de boleta",
  rut: "11111111-1",
  name: "Jhon Doe",
  email: "example@hotmail.com",
});

async function main({ amount, detail, rut, name, email }) {
  try {
    validateEnvironmentVariables();

    if (!amount) {
      throw new Error("El monto es requerido.");
    }

    const browser = await puppeteer.launch({
      headless: false,
    });
    const context = browser.defaultBrowserContext();

    await context.overridePermissions("https://eboleta.sii.cl", []); // No conceder permisos

    const page = await browser.newPage();

    try {
      await login(page);
      await emitBoleta(page, { amount, detail, rut, name, email });
    } finally {
      // await browser.close();
    }

    console.log("Proceso completado con éxito.");
  } catch (error) {
    console.error("Error en la ejecución:", error.message);
  }
}
