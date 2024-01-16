import { Grid, NumberInput, TextInput } from '@mantine/core'
import { DGNBScore, useScoresContext } from '@context'
import { calculateDGNBTotal } from './calculations.ts'

export const DGNBScoreTable = () => {
  const { scores, setScores, totalScore, setTotalScore } = useScoresContext()

  const handleOnChange = (value: string | number, currentScore: DGNBScore) => {
    const newScores = scores.map((prevScore) =>
      prevScore.label === currentScore.label
        ? {
            ...prevScore,
            value: value as number,
          }
        : prevScore,
    )
    setScores(newScores)
    setTotalScore(calculateDGNBTotal(newScores))
  }

  return (
    <Grid>
      <Grid.Col span={12}>
        <TextInput label='Total Score' size='md' radius='lg' value={totalScore} disabled={true} />
      </Grid.Col>
      {scores.map((score) => (
        <Grid.Col span={{ base: 12, sm: 6, lg: 4, xxl: 2 }} key={score.label}>
          <NumberInput
            size='md'
            radius='lg'
            label={score.label}
            suffix='%'
            value={score.value}
            onChange={(value) => handleOnChange(value, score)}
            min={0}
            max={100}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}
