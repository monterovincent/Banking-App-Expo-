export type User = {
  firstName: string;
  fullName: string;
  accountNumber: string;
  accountType: string;
  accountStatus: string;
  availableBalance: number;
  ledgerBalance: number;
};

// Mock data. Account number is fake on purpose (public repo)
export const user: User = {
  firstName: "Ebube",
  fullName: "Ebube Vincent Okutalukwe",
  accountNumber: "0123456789",
  accountType: "Savings Account",
  accountStatus: "Active",
  availableBalance: 482350.75,
  ledgerBalance: 485100.75,
};
