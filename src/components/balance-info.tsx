import { BalanceInfo } from "@/lib/interfaces";
import { Info } from "lucide-react";

interface BalanceInfoProps {
  balances?: BalanceInfo;
}

export function BalanceDetails({ balances }: BalanceInfoProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[#56616B]">
          <span>Ledger Balance</span>
          <span><Info /></span>
        </div>
        <h1 className="font-bold text-3xl text-[#131316]">USD {balances?.ledger_balance.toLocaleString('en-US')}</h1>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[#56616B]">
          <span>Total Payout</span>
          <span><Info /></span>
        </div>
        <h1 className="font-bold text-3xl text-[#131316]">USD {balances?.total_payout.toLocaleString('en-US')}</h1>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[#56616B]">
          <span>Total Revenue</span>
          <span><Info /></span>
        </div>
        <h1 className="font-bold text-3xl text-[#131316]">USD {balances?.total_revenue.toLocaleString('en-US')}</h1>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[#56616B]">
          <span>Pending Payout</span>
          <span><Info /></span>
        </div>
        <h1 className="font-bold text-3xl text-[#131316]">USD {balances?.pending_payout.toLocaleString('en-US')}</h1>
      </div>
    </div>
  );
}