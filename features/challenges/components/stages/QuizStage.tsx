"use client";

import type { QuizStage } from "../../lib/types";
import { FeedbackCard } from "../FeedbackCard";

type Props = {
  stage: QuizStage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function QuizStageView({
  stage,
  feedbackMessage,
  busy,
  onCorrect,
  onIncorrect,
}: Props) {
  return (
    <div className="colFlex items-start gap-5 w-full flex-1">
      <div className="w-full rowFlex gap-2.5 max-xl:flex-wrap">
        {stage.options.map((option) => (
          <button
            key={option.id}
            type="button"
            disabled={busy}
            onClick={() =>
              option.id === stage.answer ? onCorrect() : onIncorrect(stage.route)
            }
            className="rounded-xl cursor-pointer bg-muted-foreground/10 hover:border-nuclear-cyan/70 transition-colors p-5 border border-muted-foreground/20 rowFlex gap-2 items-center text-start"
          >
            <div className="rounded-full size-3 bg-muted-foreground/60" />
            <span className="text-foreground font-medium text-lg">
              {option.label}
            </span>
          </button>
        ))}
      </div>
      <FeedbackCard message={feedbackMessage} />
    </div>
  );
}
