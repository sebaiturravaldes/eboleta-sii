export default function validateEnvironmentVariables() {
  const requiredVars = ["RUT", "PASSWORD"];
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`La variable de entorno ${varName} es requerida.`);
    }
  });
}
