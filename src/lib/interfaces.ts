interface PaymentMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
}

export interface PaymentTransaction {
  amount: number;
  metadata?: PaymentMetadata;
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface BalanceInfo {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface User{
  email: string;
  first_name: string;
  last_name: string;
}