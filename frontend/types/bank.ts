export type BankInfoType = {
  id: number;
  name: string;
  address: string;
  nip: string;
  krs: string;
  capitalization: string;
  created_at: string;
  updated_at: string;
};

export type AverageDepositRate = {
  normal_interest_rate__avg: number;
};

export type BankDepositAverageRate = {
  bank__name: string;
  average_rate: number;
};
