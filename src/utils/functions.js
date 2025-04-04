function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}
export default toFarsiNumber;

const persianPrice = (cost) => {
  return new Intl.NumberFormat("fa", {
    currency: "IRR",
  }).format(cost);
};

export { persianPrice };

