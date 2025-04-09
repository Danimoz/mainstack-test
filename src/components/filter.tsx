'use client'

import { useState } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ChevronDown } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { formatChartDate } from '@/lib/utils';
import { Input } from './ui/input';

const dateRanges = ['Today', 'Last 7 days', 'This month', 'Last 3 months', 'This year', 'Last year', 'All time'];

export default function TableFilter() {
  const [selectedDateRange, setSelectedDateRange] = useState('All time');
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [startDateString, setStartDateString] = useState<string | undefined>(() => startDate ? formatChartDate(startDate.toISOString()) : undefined);
  const [endDateString, setEndDateString] = useState<string | undefined>(() => endDate ? formatChartDate(endDate.toISOString()) : undefined);
  const [transactionTypes, setTransactionTypes] = useState<Record<string, boolean>>({
    'Store Transactions': true,
    'Get Tipped': true,
    'Withdrawals': true,
    'Chargebacks': true,
    'Cashbacks': true,
    'Refer & Earn': true
  });
  const [transactionStatuses, setTransactionStatuses] = useState<Record<string, boolean>>({
    'Successful': false,
    'Pending': false,
    'Failed': false
  });

  const getSelectedTypesText = () => {
    const selected = Object.keys(transactionTypes).filter(type => transactionTypes[type]);
    return selected.join(', ');
  };

  const getSelectedStatusesText = () => {
    const selected = Object.keys(transactionStatuses).filter(status => transactionStatuses[status]);
    return selected.join(', ');
  };

  return (
    <div className="p-3 space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Filter</h3>
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
          {dateRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedDateRange(range)}
              className={`px-4 py-2.5 rounded-full border border-[#eff1f6] text-sm flex-shrink-0 ${selectedDateRange === range ? 'bg-black text-white' : 'text-[#56616B]'}`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-sm font-semibold">Date Range</h5>
        <div className="flex gap-2 w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-[#EFF1F6] border-0 font-normal">
                {startDateString || 'Start Date'}
                <ChevronDown className="h-4 w-4 text-[#56616B]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='bg-white border-none'>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  setStartDateString(date ? formatChartDate(date.toISOString()) : undefined);
                }}
                initialFocus
                className='bg-white'
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-[#EFF1F6] border-0 font-normal">
                {endDateString || 'Start Date'}
                <ChevronDown className="h-4 w-4 text-[#56616B]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='bg-white border-none'>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) => {
                  setEndDate(date);
                  setEndDateString(date ? formatChartDate(date.toISOString()) : undefined);
                }}
                initialFocus
                className='bg-white'
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Transaction Type</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-[#EFF1F6] border-0 font-normal">
              <span className="truncate">{getSelectedTypesText()}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[320px] p-0 border-none bg-white" align="start">
            {Object.keys(transactionTypes).map((type) => (
              <div key={type} className="flex items-center p-2">
                <Input
                  type="checkbox"
                  checked={transactionTypes[type]}
                  onChange={() => {
                    setTransactionTypes((prev) => ({ ...prev, [type]: !prev[type] }));
                  }}
                  className='w-6 h-6 p-0'
                />
                <label className="ml-2 text-sm font-medium">{type}</label>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Transaction Status</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-[#EFF1F6] border-0 font-normal">
              <span className="truncate">{getSelectedStatusesText()}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[320px] p-0 border-none bg-white" align="start">
            {Object.keys(transactionStatuses).map((type) => (
              <div key={type} className="flex items-center p-2">
                <Input
                  type="checkbox"
                  checked={transactionTypes[type]}
                  onChange={() => {
                    setTransactionStatuses((prev) => ({ ...prev, [type]: !prev[type] }));
                  }}
                  className='w-6 h-6 p-0'
                />
                <label className="ml-2 text-sm font-medium">{type}</label>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      <div className="bottom-2 absolute w-full pr-12 flex gap-3 pt-4">
        <Button variant="outline" className="h-12 rounded-full w-full">Clear</Button>
        <Button className="w-full bg-[#131316] text-white h-12 rounded-full" disabled>Apply</Button>
      </div>
    </div>
  );
}