const MASK = "********";

// Hidden by default in the UI; the eye toggle flips `visible`
export function formatBalance(amount: number, visible: boolean): string {
  if (!visible) return MASK;
  // toFixed keeps two decimals: 999.5 becomes "999.50"
  const [whole, decimals] = amount.toFixed(2).split(".");
  // Inserts a comma before every group of three digits
  return `₦${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimals}`;
}
