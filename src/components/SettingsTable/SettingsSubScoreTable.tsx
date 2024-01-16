import { NumberInput, ScrollArea, Stack, Table, TextInput, Title } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import { DGNBScore, SubScore, useScoresContext } from '@context'

export const SettingsSubScoreTable = () => {
  const { scores, setScores } = useScoresContext()
  const [, setScrolled] = useState(false)

  return (
    <ScrollArea h={800} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      {scores.map((score) => (
        <Stack key={score.label} mt={8}>
          <Title size='md'>{score.label}</Title>
          <Table miw={700}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Value</Table.Th>
                <Table.Th>Weight</Table.Th>
                <Table.Th>Max</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <TableRows score={score} setScores={setScores} />
            </Table.Tbody>
          </Table>
        </Stack>
      ))}
    </ScrollArea>
  )
}

interface TableRowsProps {
  score: DGNBScore
  setScores: Dispatch<SetStateAction<DGNBScore[]>>
}

const TableRows = ({ score, setScores }: TableRowsProps) => {
  const handleOnChange = (value: string | number, currentSubScore: SubScore, field: string) => {
    setScores((scores) =>
      scores.map((prevScore) =>
        prevScore.label === score.label
          ? {
              ...prevScore,
              subScores: prevScore.subScores.map((subScore) =>
                subScore.label === currentSubScore.label
                  ? {
                      ...currentSubScore,
                      [field]: value,
                    }
                  : subScore,
              ),
            }
          : prevScore,
      ),
    )
  }

  return score.subScores.map((row) => (
    <Table.Tr key={row.label}>
      <Table.Td>
        <TextInput
          variant='unstyled'
          value={row.label}
          onChange={(value) => handleOnChange(value.target.value, row, 'label')}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput variant='unstyled' value={row.value} onChange={(value) => handleOnChange(value, row, 'value')} />
      </Table.Td>
      <Table.Td>
        <NumberInput variant='unstyled' value={row.weight} onChange={(value) => handleOnChange(value, row, 'weight')} />
      </Table.Td>
      <Table.Td>
        <NumberInput variant='unstyled' value={row.max} onChange={(value) => handleOnChange(value, row, 'max')} />
      </Table.Td>
    </Table.Tr>
  ))
}
