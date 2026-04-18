"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import type { DragEvent, ReactNode } from "react";
import { useState } from "react";
import type { FinalBossStage } from "../../lib/types";
import { isFinalBossCorrect } from "../../lib/utils";
import { FeedbackCard } from "../FeedbackCard";
import { FinalBossResult } from "./FinalBossResult";

type Props = {
  stage: FinalBossStage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function FinalBossStageView(props: Props) {
  const { stage, feedbackMessage, busy, onCorrect, onIncorrect } = props;
  const locale = useLocale();
  const [dragged, setDragged] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const fixedLeft = locale === "en";
  const dragLimit = fixedLeft ? stage.answer.products.length : stage.answer.reactants.length;
  const equation = fixedLeft ? { reactants: ["e"], products: dragged } : { reactants: dragged, products: ["e"] };

  return (
    <div className="colFlex gap-5 w-full">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {fixedLeft ? <FixedSide label={stage.labels.reactants} /> : <DropSide label={stage.labels.reactants} values={dragged} limit={dragLimit} onDrop={(id) => setDragged((current) => addItem(current, id, dragLimit))} onRemove={(id) => setDragged((current) => current.filter((item) => item !== id))} />}
        <div className="centerFlex rounded-xl border border-muted-foreground/20 bg-muted-foreground/10 px-5 text-2xl text-nuclear-cyan">=</div>
        {fixedLeft ? <DropSide label={stage.labels.products} values={dragged} limit={dragLimit} onDrop={(id) => setDragged((current) => addItem(current, id, dragLimit))} onRemove={(id) => setDragged((current) => current.filter((item) => item !== id))} /> : <FixedSide label={stage.labels.products} />}
      </div>
      <div className="rowFlex gap-3 flex-wrap">
        {stage.bank.filter((item) => !dragged.includes(item.id)).map((item) => (
          <motion.div key={item.id} draggable whileDrag={{ scale: 1.05 }} onDragStartCapture={(event) => handleTokenDragStart(event, item.id)} className="rounded-full border border-muted-foreground/20 bg-muted-foreground/10 px-4 py-2 text-base text-foreground">
            <TokenLabel id={item.id} />
          </motion.div>
        ))}
      </div>
      <FinalBossResult givens={stage.givens} result={stage.result} value={result} busy={busy} onChange={setResult} />
      <div className="rowFlex gap-3 flex-wrap">
        <button type="button" onClick={() => { setDragged([]); setResult(""); }} className="rounded-xl border border-muted-foreground/20 bg-muted-foreground/10 px-5 py-3 text-lg text-foreground">
          {stage.labels.reset}
        </button>
        <button type="button" disabled={busy} onClick={() => (isFinalBossCorrect(equation, stage.answer, result, stage.result.answer) ? onCorrect() : onIncorrect(stage.route))} className="rounded-xl border border-nuclear-cyan/40 bg-nuclear-cyan/15 px-5 py-3 text-lg font-medium text-nuclear-cyan">
          {stage.cta}
        </button>
      </div>
      <FeedbackCard message={feedbackMessage} />
    </div>
  );
}

function handleTokenDragStart(event: DragEvent<HTMLDivElement>, id: string) {
  event.dataTransfer.setData("text/plain", id);
}

function addItem(current: string[], id: string, limit: number) {
  return current.length < limit && !current.includes(id) ? [...current, id] : current;
}

function TokenLabel({ id }: { id: string }) {
  return id === "c2" ? <span>c<sup>2</sup></span> : <span>{id === "e" ? "E" : id}</span>;
}

function FixedSide({ label }: { label: string }) {
  return <SideShell label={label}><TokenLabel id="e" /></SideShell>;
}

function DropSide(props: { label: string; values: string[]; limit: number; onDrop: (id: string) => void; onRemove: (id: string) => void; }) {
  return (
    <SideShell label={props.label} onDrop={props.onDrop}>
      {props.values.map((value) => (
        <button key={value} type="button" onClick={() => props.onRemove(value)} className="rounded-full border border-nuclear-cyan/40 bg-nuclear-cyan/10 px-4 py-2 text-base text-nuclear-cyan">
          <TokenLabel id={value} />
        </button>
      ))}
      {props.values.length < props.limit && <span className="text-sm text-muted-foreground">Drag here</span>}
    </SideShell>
  );
}

function SideShell(props: { label: string; children: ReactNode; onDrop?: (id: string) => void; }) {
  return (
    <div onDragOver={(event) => event.preventDefault()} onDrop={(event) => props.onDrop?.(event.dataTransfer.getData("text/plain"))} className="colFlex gap-3 rounded-2xl border border-muted-foreground/20 bg-muted-foreground/10 p-5 min-h-28">
      <span className="text-sm font-medium text-muted-foreground">{props.label}</span>
      <div className="rowFlex gap-2 flex-wrap">{props.children}</div>
    </div>
  );
}
