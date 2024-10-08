import { TReview } from "../redux/modules/reviews/types";

export function convertRattingToAverage(nodes: TReview[]): number {
  return !nodes.length ? 0 : nodes.reduce(
    (acc, curr) => acc + curr.rating,
    0
  ) / nodes.length
}