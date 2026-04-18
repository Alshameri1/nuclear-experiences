import { Trophy } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ChallengesExperience } from "./components/ChallengesExperience";

export async function ChallengesPage() {
  const t = await getTranslations("challenges");

  return (
    <div className="pageClass container">
      <div className="fade colFlex gap-16 w-full">
        <SectionIntro
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
          icon={<Trophy className="w-4 h-4 text-nuclear-cyan" />}
          accentClassName="text-nuclear-cyan"
          badgeTextClassName="text-nuclear-cyan"
        />
        <ChallengesExperience />
      </div>
    </div>
  );
}
