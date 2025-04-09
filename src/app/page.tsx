import { Button } from "@/components/ui/button";
import { getBalances, getTransactions } from "@/lib/queries";
import { Suspense } from "react";
import { BalanceDetails } from "@/components/balance-info";
import TransactionChart from "@/components/line-chart";
import { ChevronDown, Download } from "lucide-react";
import { TransactionList } from "@/components/transaction-list";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TableFilter from "@/components/filter";

export default async function Home() {
  const transactions = await getTransactions()
  const balances = await getBalances()

  if (!transactions || !balances) {
    return <p>Can&apos;t fetch, try again</p>;
  }

  return (
    <main className="pt-20">
      <section className="container mx-auto grid grid-cols-[75%_25%] gap-8">
        <div className="h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <div className="flex items-center gap-16">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#56616b]">Available Balance</p>
                <h1 className="font-bold text-4xl">USD {balances?.balance}</h1>
              </div>
              <div>
                <Button className="bg-[#131316] py-3.5 px-7 rounded-4xl text-white text-base font-semibold h-12">
                  Withdraw
                </Button>
              </div>
            </div>
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <TransactionChart data={transactions} />
          </Suspense>
        </div>
        <div className="h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <BalanceDetails balances={balances} />
          </Suspense>
        </div>
      </section>

      <section className="container mx-auto py-8 mt-10">
        <div className="flex justify-between items-center gap-8 border-b border-[#eff1f6]">
          <div>
            <h2 className="font-bold text-2xl">{transactions?.length} Transactions</h2>
            <p className="text-[#56616b] font-medium">Your transactions for the last 7 days</p>
          </div>
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-[#eff1f6] text-[#131316] rounded-4xl h-12 px-7 py-3">
                  Filter
                  <ChevronDown color="black" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[500px] bg-white">
                <TableFilter />
              </SheetContent>
            </Sheet>
            <Button className="bg-[#eff1f6] text-[#131316] rounded-4xl h-12 px-7 py-3">
              Export list
              <Download color="black" />
            </Button>
          </div>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <TransactionList transactions={transactions} />
        </Suspense>
      </section>
    </main >
  );
}
