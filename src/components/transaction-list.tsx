import { PaymentTransaction } from "@/lib/interfaces";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { cn, formatChartDate } from "@/lib/utils";

interface TransactionListProps {
  transactions?: PaymentTransaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  if (!transactions?.length) return null;

  return (
    <div className="space-y-6 mt-6">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className={`${transaction.type === 'deposit' ? 'bg-[#e3fcf2]' : 'bg-[#F9E3E0]'}`}>
                <span>{transaction.type === 'deposit' ? <MoveDownLeft strokeWidth={1} /> : <MoveUpRight strokeWidth={1} />}</span>
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="font-medium">{transaction.type === 'withdrawal' ? 'Cash withdrawal' : transaction.metadata?.product_name || 'Cash Deposit'}</p>
              <p className={cn(
                'text-sm text-[#56616B]',
                transaction.type === 'withdrawal' && transaction.status === 'successful' && 'text-[#0EA163]',
                transaction.type === 'withdrawal' && transaction.status === 'pending' && 'text-[#A77A07]'
              )}>
                {transaction.type === 'withdrawal' ? transaction.status : transaction.metadata?.name}
              </p>
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-2 justify-end">
              <p className="font-bold">
                USD {transaction.amount.toLocaleString('en-US')}
              </p>
            </div>
            <p className="text-sm text-[#56616B] capitalize">{formatChartDate(transaction.date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}