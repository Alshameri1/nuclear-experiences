import type { ChallengeStage as Stage } from "../lib/types";
import { CardsStageView } from "./stages/CardsStage";
import { DragDropStageView } from "./stages/DragDropStage";
import { FinalBossStageView } from "./stages/FinalBossStage";
import { MatchingStageView } from "./stages/MatchingStage";
import { QuizStageView } from "./stages/QuizStage";

type Props = {
  stage: Stage;
  feedbackMessage: string | null;
  busy: boolean;
  onCorrect: () => void;
  onIncorrect: (route: string) => void;
};

export function ChallengeStage(props: Props) {
  switch (props.stage.type) {
    case "quiz":
      return <QuizStageView {...props} stage={props.stage} />;
    case "dragDrop":
      return <DragDropStageView {...props} stage={props.stage} />;
    case "matching":
      return <MatchingStageView {...props} stage={props.stage} />;
    case "cards":
      return <CardsStageView {...props} stage={props.stage} />;
    default:
      return <FinalBossStageView {...props} stage={props.stage} />;
  }
}
