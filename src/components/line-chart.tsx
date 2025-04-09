'use client';

import { PaymentTransaction } from "@/lib/interfaces";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { formatChartDate } from "@/lib/utils";
import { Line, LineChart } from "recharts";

interface TransactionChartProps {
  data?: PaymentTransaction[]
}
export default function TransactionChart({ data }: TransactionChartProps){
  const chartConfig = {
    amount: {
      label: "Amount",
      color: "hsl(20, 100%, 51%)",
    },
  } satisfies ChartConfig

  const chartData = data?.map((item) => {
    const date = formatChartDate(item.date)
    const amount = item.amount
    return { date, amount }
  })

  return (
    <div className="h-[350px] w-[88%]">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="amount"
            type="monotone"
            stroke="#FF5403"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
      <div className="flex justify-between border-t border-[#DBDEE5]">
        <span>{chartData?.[0]?.date}</span>
        <span>{chartData?.[chartData.length - 1]?.date}</span>
      </div>
    </div>
  )
}