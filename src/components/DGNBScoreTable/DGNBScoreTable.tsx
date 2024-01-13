import { Grid, NumberInput, TextInput } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { calculateDGNBTotal } from './calculations.ts'
import { DGNBScore } from '@context'

interface DGNBScoreTableProps {
  scores: DGNBScore[]
  setScores: Dispatch<SetStateAction<DGNBScore[]>>
}

export const DGNBScoreTable = (props: DGNBScoreTableProps) => {
  const { scores, setScores } = props

  return (
    <Grid>
      <Grid.Col span={12}>
        <TextInput label='Total Score' size='md' radius='lg' value={calculateDGNBTotal(scores)} disabled={true} />
      </Grid.Col>
      {scores.map((score) => (
        <Grid.Col span={{ base: 12, sm: 6, lg: 4, xxl: 2 }} key={score.label}>
          <NumberInput
            size='md'
            radius='lg'
            label={score.label}
            suffix='%'
            value={score.value}
            onChange={(value) =>
              setScores((prevScores) =>
                prevScores.map((prevScore) =>
                  prevScore.label === score.label
                    ? {
                        ...prevScore,
                        value: value as number,
                      }
                    : prevScore,
                ),
              )
            }
            min={0}
            max={100}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}
