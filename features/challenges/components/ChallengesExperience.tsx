"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import MythTruthTag from "@/components/shared/MythTruthTag";
import { toast } from "sonner";
import { ChallengeStage } from "./ChallengeStage";
import { ProgressBar } from "./ProgressBar";
import { StageList } from "./StageList";
import type { ChallengeStage as Stage } from "../lib/types";

const STORAGE_KEY = "challenges-progress";

export function ChallengesExperience() {
  const t = useTranslations("challenges");
  const router = useRouter();
  const stages = t.raw("stages") as Stage[];
  const [completedCount, setCompletedCount] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const saved = Math.min(
      Number(window.localStorage.getItem(STORAGE_KEY) || "0"),
      stages.length,
    );
    setCompletedCount(saved);
    setStageIndex(saved >= stages.length ? stages.length : saved);
  }, [stages.length]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(completedCount));
  }, [completedCount]);

  const handleCorrect = () => {
    toast.success(t("feedback.correctAnswer"));
    setCompletedCount((current) => {
      const next = Math.max(current, stageIndex + 1);
      setStageIndex(next < stages.length ? next : stages.length);
      return next;
    });
  };

  const handleIncorrect = (route: string) => {
    toast.error(t("feedback.incorrectAnswer"));
    router.push(route);
  };

  const complete = stageIndex >= stages.length;
  const activeStage = complete ? null : stages[stageIndex];

  return (
    <div className="colFlex gap-10 w-full">
      <ProgressBar current={completedCount} total={stages.length} />
      <section className="w-full rowFlex items-start gap-10 max-lg:colFlex">
        <StageList
          stages={stages}
          stageIndex={stageIndex}
          completedCount={completedCount}
          onSelect={setStageIndex}
        />
        <div className="colFlex items-start gap-5 w-full flex-1">
          <header className="colFlex items-start gap-2">
            <MythTruthTag
              label={complete ? t("completionTag") : activeStage?.tag || ""}
              type="truth"
              absolute={false}
            />
            <h1 className="text-nuclear-cyan font-semibold text-4xl">
              {complete ? t("completion") : activeStage?.prompt}
            </h1>
          </header>
          {activeStage && (
            <ChallengeStage
              stage={activeStage}
              feedbackMessage={null}
              busy={false}
              onCorrect={handleCorrect}
              onIncorrect={handleIncorrect}
            />
          )}
        </div>
      </section>
    </div>
  );
}
