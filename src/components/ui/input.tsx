import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        type === "checkbox" && "appearance-none bg-white checked:bg-[#131316] checked:border-white relative",
        type === "checkbox" && "checked:after:absolute checked:after:content-[''] checked:after:w-[12px] checked:after:h-[8px] checked:after:border-l-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-[-45deg] checked:after:top-[6px] checked:after:left-[4px]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
}
)
Input.displayName = "Input"

export { Input }
