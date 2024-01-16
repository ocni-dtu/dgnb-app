import { DGNBScore, SubScore } from '@context'

export const calculateInnerDonutThickness = (score: SubScore, radius: number, thickness: number) => {
  return radius - ((radius - thickness) * score.value) / score.max
}

export const calculateOuterDonutThickness = (
  score: DGNBScore,
  radius: number,
  thickness: number,
  showSubScores: boolean,
) => {
  if (showSubScores) return radius - thickness + 0.005
  return radius - (radius - thickness) * score.value * 0.01
}
