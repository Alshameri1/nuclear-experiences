import { cn } from "@/lib/utils";
import type { ChallengeStage } from "../lib/types";

type Props = {
  stages: ChallengeStage[];
  stageIndex: number;
  completedCount: number;
  onSelect: (index: number) => void;
};

export function StageList({
  stages,
  stageIndex,
  completedCount,
  onSelect,
}: Props) {
  return (
    <div className="colFlex gap-4 w-full lg:w-[360px]">
      {stages.map((stage, index) => {
        const unlocked = index <= completedCount;
        const active = index === stageIndex;
        return (
          <button
            key={stage.key}
            type="button"
            onClick={() => unlocked && onSelect(index)}
            className={cn(
              "w-full rowFlex items-center border-2 rounded-3xl p-4 gap-3 text-lg text-start transition-opacity",
              active
                ? "border-nuclear-cyan/70 text-nuclear-cyan bg-nuclear-cyan/15"
                : "border-muted-foreground/20 text-foreground/80 bg-muted-foreground/10",
              !unlocked && "opacity-30 cursor-not-allowed",
            )}
          >
            <span className="size-10 rounded-2xl border centerFlex border-current/60 bg-current/10">
              {index + 1}
            </span>
            <span className="font-medium">{stage.title}</span>
          </button>
        );
      })}
    </div>
  );
}
