import React, { HTMLAttributes } from 'react'

type Props = {
    text?: string
    children?: React.ReactNode
    disabled?: boolean
}
export default function Button({className, text, children, disabled = false, ...props}: Props & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} disabled={disabled} className={`centerFlex gap-2 px-6 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 ${className}`}>
            { text}
            {children}
        </button>
    )
}
