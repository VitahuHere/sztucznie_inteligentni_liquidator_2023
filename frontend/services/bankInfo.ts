import axios from "axios";
import { BankInfoType } from "../types/bank.ts";
import { backendUrl } from "../src/consts/http.ts";

export async function getBankInfo(): Promise<BankInfoType[]> {
  const response = await axios.get(backendUrl + "banks/");
  return response.data;
}
