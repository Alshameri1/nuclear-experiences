"use client";

import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const t = useTranslations("challenges.progress");
  const width = `${(current / total) * 100}%`;

  return (
    <div className="rowFlex w-full gap-3">
      <div className="rounded-full px-4 py-3 gap-3 rowFlex items-center border border-muted-foreground/20">
        <Trophy className="size-4 text-nuclear-cyan" />
        <p className="text-sm font-medium text-muted-foreground/70">
          {current}/{total}
        </p>
      </div>
      <div className="colFlex items-start gap-3 w-full">
        <p className="text-sm font-medium text-muted-foreground/70">{t("label")}</p>
        <div className="rounded-[4px] bg-muted-foreground/20 h-2 w-full overflow-hidden">
          <div
            className="h-full rounded-[4px] bg-nuclear-cyan transition-[width] duration-300"
            style={{ width }}
          />
        </div>
      </div>
    </div>
  );
}
