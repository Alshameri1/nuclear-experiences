export type BaseStage = {
  key: string;
  type: "quiz" | "dragDrop" | "matching" | "cards" | "finalBoss";
  title: string;
  tag: string;
  route: string;
  prompt: string;
  cta: string;
};

export type QuizStage = BaseStage & {
  type: "quiz";
  options: { id: string; label: string }[];
  answer: string;
};

export type DragDropStage = BaseStage & {
  type: "dragDrop";
  items: { id: string; label: string }[];
  answer: string[];
};

export type MatchingStage = BaseStage & {
  type: "matching";
  left: { id: string; label: string }[];
  right: { id: string; label: string }[];
  answer: Record<string, string>;
};

export type CardsStage = BaseStage & {
  type: "cards";
  cards: { id: string; title: string; description: string }[];
  answer: string[];
};

export type FinalBossStage = BaseStage & {
  type: "finalBoss";
  bank: { id: string; label: string }[];
  slots: { reactants: number; products: number };
  labels: { reactants: string; products: string; reset: string };
  givens: { label: string; value: string }[];
  result: { label: string; placeholder: string; answer: string };
  answer: { reactants: string[]; products: string[] };
};

export type ChallengeStage =
  | QuizStage
  | DragDropStage
  | MatchingStage
  | CardsStage
  | FinalBossStage;
