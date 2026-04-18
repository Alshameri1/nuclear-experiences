import React from 'react'

export default function RowInfo({color, labels, difference}: {color: string, labels: string, difference: string}) {
    return (
        <div className={`glass rounded-xl p-4 border-r-4 border-nuclear-${color} colFlex gap-1`}>
            <div className="flex items-center gap-2">
                <span className={`text-sm text-nuclear-${color}`}>{labels}</span>
            </div>
            <p className="text-xl font-bold">{difference}</p>
            <p className="text-xs text-muted-foreground">{difference}</p>
        </div>
    )
}
