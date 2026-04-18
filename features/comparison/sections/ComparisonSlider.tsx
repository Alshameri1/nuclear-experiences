import { getTranslations } from "next-intl/server";
import { ComparisonHeader } from "../components/ComparisonSlider/ComparisonHeader";
import { ComparisonClientWrapper } from "../components/ComparisonSlider/ComparisonClientWrapper";

export async function ComparisonSlider() {
  const t = await getTranslations("pages.comparison.slider");
  const comparisons = t.raw("items");

  return (
    <section className="componentsClass w-full">
      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-6 md:gap-8">
        <ComparisonHeader
          vs={t("vs")}
          reactorText={t("reactor")}
          bombText={t("bomb")}
          description={t("description")}
        />

        <ComparisonClientWrapper
          comparisons={comparisons}
          t={{
            reactor: t("reactor"),
            bomb: t("bomb"),
            peaceful: t("peaceful"),
            drag: t("drag"),
            weapon: t("weapon")
          }}
        />
      </div>
    </section>
  );
}