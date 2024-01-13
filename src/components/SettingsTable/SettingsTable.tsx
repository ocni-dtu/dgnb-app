import { ColorInput, NumberInput, ScrollArea, Table, TextInput } from '@mantine/core'
import { useState } from 'react'
import { useScoresContext } from '@context'

export const SettingsTable = () => {
  const { scores, setScores } = useScoresContext()
  const [, setScrolled] = useState(false)

  const rows = scores.map((row) => (
    <Table.Tr key={row.label}>
      <Table.Td>
        <TextInput
          variant='unstyled'
          value={row.label}
          onChange={(value) =>
            setScores((prevScores) =>
              prevScores.map((prevScore) =>
                prevScore.label === row.label
                  ? {
                      ...prevScore,
                      label: value.target.value,
                    }
                  : prevScore,
              ),
            )
          }
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          variant='unstyled'
          value={row.value}
          onChange={(value) =>
            setScores((prevScores) =>
              prevScores.map((prevScore) =>
                prevScore.label === row.label
                  ? {
                      ...prevScore,
                      value: value as number,
                    }
                  : prevScore,
              ),
            )
          }
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          variant='unstyled'
          value={row.weight}
          onChange={(value) =>
            setScores((prevScores) =>
              prevScores.map((prevScore) =>
                prevScore.label === row.label
                  ? {
                      ...prevScore,
                      weight: value as number,
                    }
                  : prevScore,
              ),
            )
          }
        />
      </Table.Td>
      <Table.Td>
        <ColorInput
          variant='unstyled'
          value={row.color}
          onChange={(value) =>
            setScores((prevScores) =>
              prevScores.map((prevScore) =>
                prevScore.label === row.label
                  ? {
                      ...prevScore,
                      color: value,
                    }
                  : prevScore,
              ),
            )
          }
        />
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <ScrollArea h={800} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Value</Table.Th>
            <Table.Th>Weight</Table.Th>
            <Table.Th>Color</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  )
}
