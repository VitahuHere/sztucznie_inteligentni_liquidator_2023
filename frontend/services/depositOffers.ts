import axios from "axios";
import { backendUrl } from "../src/consts/http";
import { AverageDepositRate, BankDepositAverageRate } from "../types/bank.ts";

export async function getAverageIndividualDeposit(): Promise<AverageDepositRate> {
  const response = await axios.get(
    backendUrl + "deposit-offers/individual/average-rate/",
  );
  return response.data;
}

export async function getBelowAverageIndividualDeposit(): Promise<
  BankDepositAverageRate[]
> {
  const response = await axios.get(
    backendUrl + "deposit-offers/individual/below-average-rate/",
  );
  return response.data;
}

export async function getAboveAverageIndividualDeposit(): Promise<
  BankDepositAverageRate[]
> {
  const response = await axios.get(
    backendUrl + "deposit-offers/individual/above-average-rate/",
  );
  return response.data;
}

export async function getAverageBusinessDeposit(): Promise<AverageDepositRate> {
  const response = await axios.get(
    backendUrl + "deposit-offers/business/average-rate/",
  );
  return response.data;
}

export async function getBelowAverageBusinessDeposit(): Promise<
  BankDepositAverageRate[]
> {
  const response = await axios.get(
    backendUrl + "deposit-offers/business/below-average-rate/",
  );
  return response.data;
}

export async function getAboveAverageBusinessDeposit(): Promise<
  BankDepositAverageRate[]
> {
  const response = await axios.get(
    backendUrl + "deposit-offers/business/above-average-rate/",
  );
  return response.data;
}
