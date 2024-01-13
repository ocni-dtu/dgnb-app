import { DGNBScore } from '@context'

export const calculateDGNBTotal = (scores: DGNBScore[]) => {
  return scores.reduce((total, score) => calculateWeightedScore(score) + total, 0).toFixed(2)
}

export const calculateWeightedScore = (score: DGNBScore) => score.value * score.weight * 0.01
