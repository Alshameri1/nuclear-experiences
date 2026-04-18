export function moveItem<T>(items: T[], from: number, to: number) {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function isOrderCorrect(items: string[], answer: string[]) {
  return items.join("|") === answer.join("|");
}

export function isCardsCorrect(selected: string[], answer: string[]) {
  return [...selected].sort().join("|") === [...answer].sort().join("|");
}

export function isMatchingCorrect(
  selected: Record<string, string>,
  answer: Record<string, string>,
) {
  return Object.keys(answer).every((key) => selected[key] === answer[key]);
}

export function isEquationCorrect(
  selected: { reactants: string[]; products: string[] },
  answer: { reactants: string[]; products: string[] },
) {
  return (
    isOrderCorrect(selected.reactants, answer.reactants) &&
    isOrderCorrect(selected.products, answer.products)
  );
}

export function isFinalBossCorrect(
  selected: { reactants: string[]; products: string[] },
  answer: { reactants: string[]; products: string[] },
  result: string,
  expectedResult: string,
) {
  return (
    isCardsCorrect(selected.reactants, answer.reactants) &&
    isCardsCorrect(selected.products, answer.products) &&
    result.trim() === expectedResult.trim()
  );
}
