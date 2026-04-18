"use client";

import type { FinalBossStage } from "../../lib/types";

type Props = {
  givens: FinalBossStage["givens"];
  result: FinalBossStage["result"];
  value: string;
  busy: boolean;
  onChange: (value: string) => void;
};

export function FinalBossResult({ givens, result, value, busy, onChange }: Props) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
      <div className="colFlex gap-3 rounded-2xl border border-muted-foreground/20 bg-muted-foreground/10 p-5">
        <span className="text-sm font-medium text-muted-foreground">{result.label}</span>
        <div className="rowFlex gap-3 flex-wrap">
          {givens.map((item) => (
            <span key={item.label} className="rounded-full border border-nuclear-cyan/40 bg-nuclear-cyan/10 px-4 py-2 text-base text-nuclear-cyan">
              {item.label}: {item.value}
            </span>
          ))}
        </div>
      </div>
      <label className="colFlex gap-3 rounded-2xl border border-muted-foreground/20 bg-muted-foreground/10 p-5">
        <span className="text-sm font-medium text-muted-foreground">{result.placeholder}</span>
        <input
          value={value}
          disabled={busy}
          onChange={(event) => onChange(event.target.value)}
          className="rounded-xl border border-muted-foreground/20 bg-background px-4 py-3 text-lg text-foreground outline-none"
        />
      </label>
    </div>
  );
}
