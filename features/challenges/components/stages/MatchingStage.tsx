"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { MatchingStage } from "../../lib/types";
import { isMatchingCorrect } from "../../lib/utils";
import { FeedbackCard } from "../FeedbackCard";

type Props = {
  stage: MatchingStage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function MatchingStageView({
  stage,
  feedbackMessage,
  busy,
  onCorrect,
  onIncorrect,
}: Props) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const rightLabels = Object.fromEntries(stage.right.map((item) => [item.id, item.label]));

  const handleMatch = (rightId: string) => {
    if (!selectedLeft) return;
    setPairs((current) => {
      const next = Object.fromEntries(
        Object.entries(current).filter(([, value]) => value !== rightId),
      );
      next[selectedLeft] = rightId;
      return next;
    });
    setSelectedLeft(null);
  };

  return (
    <div className="colFlex gap-5 w-full">
      <div className="grid w-full gap-4 lg:grid-cols-2">
        <div className="colFlex gap-3">
          {stage.left.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              disabled={busy}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLeft(item.id)}
              className={`colFlex gap-2 rounded-xl border p-4 text-start ${selectedLeft === item.id ? "border-nuclear-cyan/60 bg-nuclear-cyan/10 text-nuclear-cyan" : "border-muted-foreground/20 bg-muted-foreground/10 text-foreground"}`}
            >
              <span>{item.label}</span>
              {pairs[item.id] && (
                <span className="text-sm text-muted-foreground">
                  {rightLabels[pairs[item.id]]}
                </span>
              )}
            </motion.button>
          ))}
        </div>
        <div className="colFlex gap-3">
          {stage.right.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              disabled={busy}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMatch(item.id)}
              className={`rounded-xl border p-4 text-start ${Object.values(pairs).includes(item.id) ? "border-nuclear-cyan/60 bg-nuclear-cyan/10 text-nuclear-cyan" : "border-muted-foreground/20 bg-muted-foreground/10 text-foreground"}`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
      <button
        type="button"
        disabled={busy}
        onClick={() =>
          Object.keys(pairs).length === stage.left.length &&
          isMatchingCorrect(pairs, stage.answer)
            ? onCorrect()
            : onIncorrect(stage.route)
        }
        className="rounded-xl border border-nuclear-cyan/40 bg-nuclear-cyan/15 px-5 py-3 text-lg font-medium text-nuclear-cyan"
      >
        {stage.cta}
      </button>
      <FeedbackCard message={feedbackMessage} />
    </div>
  );
}
