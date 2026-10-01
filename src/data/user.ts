export type User = {
  firstName: string;
  fullName: string;
  accountNumber: string;
  accountType: string;
};

// Mock data. Account number is fake on purpose (public repo)
export const user: User = {
  firstName: "Ebube",
  fullName: "Ebube Vincent Okutalukwe",
  accountNumber: "0123456789",
  accountType: "Savings Account",
};
