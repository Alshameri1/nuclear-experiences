"use client"

import { Clock, Percent, Target, Shield } from "lucide-react"
import RowInfo from "../components/RowInfo"
import { DifferenceListProps, DifferenceRowProps } from "../type"

const differenceIcons = [Percent, Clock, Target, Shield] as const


function DifferenceRow({
  difference,
  index,
  labels,
}: DifferenceRowProps) {
  const Icon = differenceIcons[index] ?? Target

  return (
    <div
      className="glass-dark rounded-2xl p-6 fade"
    >
      <div className="grid md:grid-cols-[200px_1fr_1fr] gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
            <Icon className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h4 className="font-bold">{difference.aspect}</h4>
            <span className="text-xs text-muted-foreground">{difference.aspectEn}</span>
          </div>
        </div>

        <RowInfo color="cyan" labels={labels.reactorLabel} difference={difference.reactor} />
        <RowInfo color="red" labels={labels.bombLabel} difference={difference.bomb} />
      </div>
    </div>
  )
}

export function DifferenceList({
  title,
  differences,
  labels,
}: DifferenceListProps) {
  return (
    <div className="fade colFlex gap-8 container">
      <h3 className="text-2xl font-bold text-center">{title}</h3>

      <div className="grid gap-4">
        {differences.map((difference, index) => (
          <DifferenceRow
            key={difference.aspect}
            difference={difference}
            index={index}
            labels={labels}
          />
        ))}
      </div>
    </div>
  )
}
