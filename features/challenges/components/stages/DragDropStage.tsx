"use client";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import type { DragDropStage } from "../../lib/types";
import { isOrderCorrect } from "../../lib/utils";
import { FeedbackCard } from "../FeedbackCard";

type Props = {
  stage: DragDropStage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function DragDropStageView({
  stage,
  feedbackMessage,
  busy,
  onCorrect,
  onIncorrect,
}: Props) {
  const [items, setItems] = useState(stage.items);
  const signature = stage.items.map((item) => `${item.id}:${item.label}`).join("|");

  useEffect(() => {
    setItems(stage.items);
  }, [signature]);

  return (
    <div className="colFlex gap-5 w-full">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="colFlex gap-3 w-full"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="rounded-xl border border-muted-foreground/20 bg-muted-foreground/10 p-5 text-lg text-foreground"
          >
            {item.label}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button
        type="button"
        disabled={busy}
        onClick={() =>
          isOrderCorrect(items.map((item) => item.id), stage.answer)
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
