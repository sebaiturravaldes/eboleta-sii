// retorna el selector html de la calculadora del SII
export default function calculatorSelectorHTML(value) {
  if (value === 0) {
    return "div.col.col-4:nth-child(10)";
  } else if (value === 1) {
    return "div.col.col-4:nth-child(7)";
  } else if (value === 2) {
    return "div.col.col-4:nth-child(8)";
  } else if (value === 3) {
    return "div.col.col-4:nth-child(9)";
  } else if (value === 4) {
    return "div.col.col-4:nth-child(4)";
  } else if (value === 5) {
    return "div.col.col-4:nth-child(5)";
  } else if (value === 6) {
    return "div.col.col-4:nth-child(6)";
  } else if (value === 7) {
    return "div.col.col-4";
  } else if (value === 8) {
    return "div.col.col-4:nth-child(2)";
  } else if (value === 9) {
    return "div.col.col-4:nth-child(3)";
  }

  throw new Error("Valor no soportado.");
}
