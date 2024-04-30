function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}
export default toFarsiNumber;

// function toPersianNum(num, dontTrim) {
//   var i = 0,
//     dontTrim = dontTrim || false,
//     num = dontTrim ? num.toString() : num.toString().trim(),
//     len = num.length,
//     res = "",
//     pos,
//     persianNumbers =
//       typeof persianNumber == "undefined"
//         ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
//         : persianNumbers;

//   for (; i < len; i++)
//     if ((pos = persianNumbers[num.charAt(i)])) res += pos;
//     else res += num.charAt(i);

//   return res;
// }
// export { toPersianNum };
