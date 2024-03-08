export type AvailableCurrencies = "SAT" | "ARS" | "USD";

export function parseContent(content: string) {
  try {
    const parsed = JSON.parse(content);
    return parsed;
  } catch {
    return {};
  }
}

export const roundToDown = (num: number, decimals: number): number => {
  const t = Math.pow(10, decimals);
  return Number(
    (
      Math.floor(
        num * t +
          (decimals > 0 ? 1 : 0) *
            (Math.sign(num) * (10 / Math.pow(100, decimals)))
      ) / t
    ).toFixed(decimals)
  );
};

export const decimalsToUse = (currency: AvailableCurrencies): number => {
  switch (currency) {
    case "SAT":
      return 0;

    case "ARS":
      return 2;

    default:
      return 2;
  }
};
