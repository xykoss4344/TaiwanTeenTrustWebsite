import * as React from "react"


// Ideally we'd use cva for variants but I'll keeping it simple without extra deps if possible.
// Wait, I don't have radix-ui installed. I should avoid using it if I didn't install it.
// I'll just make a simple HTML label wrapper.

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
                {...props}
            />
        )
    }
)
Label.displayName = "Label"

export { Label }
