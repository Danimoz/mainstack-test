import { BalanceInfo, PaymentTransaction } from "./interfaces"

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string

export async function getTransactions(){
  try {
    const res = await fetch(`${BASE_API_URL}/transactions`)
    const data: PaymentTransaction[] = await res.json()
    return data
  } catch (err){
    console.log(err)
  }
}

export async function getBalances(){
  try {
    const res = await fetch(`${BASE_API_URL}/wallet`)
    const data: BalanceInfo = await res.json()
    return data
  } catch (err){
    console.log(err)
  }
}