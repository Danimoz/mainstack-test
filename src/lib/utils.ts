import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatChartDate(date: string){
  const givenDate = new Date(date)
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(givenDate);
  return formatted
}

export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())