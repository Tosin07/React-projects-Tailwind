export const _convertToNaira = (amount) => {
  const formattedNumber = parseInt(amount);
  const nairaEquivalent = formattedNumber.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  return nairaEquivalent;
};

// export const _truncateText = (string, index) => {
//   const formattedString = index < 1 ? string?.slice(0, index) : `${string?.slice(0, index)}...`;
//   return formattedString
// }