import { Grid, NumberInput, Title } from '@mantine/core'
import { DGNBScore, SubScore, useScoresContext } from '@context'

export const SubScoreTable = () => {
  const { scores, setScores, totalScore, setTotalScore } = useScoresContext()

  const handleOnChange = (value: string | number, currentScore: DGNBScore, currentSubScore: SubScore) => {
    const newScores = scores.map((prevScore) =>
      prevScore.label === currentScore.label
        ? {
            ...prevScore,
            subScores: prevScore.subScores.map((subScore) =>
              subScore.label === currentSubScore.label
                ? {
                    ...currentSubScore,
                    value: value as number,
                  }
                : subScore,
            ),
          }
        : prevScore,
    )
    setScores(newScores)
  }

  return (
    <Grid>
      <Grid.Col span={12}>
        <NumberInput
          label='Total Score'
          size='md'
          radius='lg'
          value={totalScore}
          onChange={(value) => setTotalScore((value as number).toFixed(2))}
        />
      </Grid.Col>
      {scores.map((score) => (
        <Grid.Col span={12} key={score.label} my={8}>
          <Title size='lg'>{score.label}</Title>
          <Grid>
            {score.subScores.map((subScore) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 3, lg: 1.5, xxl: 1 }} key={subScore.label}>
                <NumberInput
                  size='md'
                  radius='lg'
                  label={subScore.label}
                  value={subScore.value}
                  onChange={(value) => handleOnChange(value, score, subScore)}
                  min={0}
                  max={subScore.max}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      ))}
    </Grid>
  )
}
