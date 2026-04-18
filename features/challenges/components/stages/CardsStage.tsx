"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { CardsStage } from "../../lib/types";
import { isCardsCorrect } from "../../lib/utils";
import { FeedbackCard } from "../FeedbackCard";

type Props = {
  stage: CardsStage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function CardsStageView({
  stage,
  feedbackMessage,
  busy,
  onCorrect,
  onIncorrect,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <div className="colFlex gap-5 w-full">
      <div className="grid w-full gap-4 md:grid-cols-2">
        {stage.cards.map((card) => {
          const active = selected.includes(card.id);
          return (
            <motion.button
              key={card.id}
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => toggle(card.id)}
              className={`colFlex gap-3 rounded-2xl border p-5 text-start ${active ? "border-nuclear-cyan/60 bg-nuclear-cyan/10" : "border-muted-foreground/20 bg-muted-foreground/10"}`}
            >
              <span className="text-lg font-semibold text-foreground">{card.title}</span>
              <span className="text-base text-muted-foreground">{card.description}</span>
            </motion.button>
          );
        })}
      </div>
      <button
        type="button"
        disabled={busy}
        onClick={() =>
          isCardsCorrect(selected, stage.answer) ? onCorrect() : onIncorrect(stage.route)
        }
        className="rounded-xl border border-nuclear-cyan/40 bg-nuclear-cyan/15 px-5 py-3 text-lg font-medium text-nuclear-cyan"
      >
        {stage.cta}
      </button>
      <FeedbackCard message={feedbackMessage} />
    </div>
  );
}
