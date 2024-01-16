import { DGNBChart, DGNBScoreTable, DownloadSVG, SubScoreTable } from '@components'
import { Container, Group, Switch, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { Dispatch, SetStateAction, useState } from 'react'

export const LandingPage = () => {
  const { height, width } = useViewportSize()

  const [showSubScores, setShowSubScores] = useState<boolean>(false)

  const size = Math.min(height, width) * 0.8
  return (
    <Container>
      <DGNBChart width={size} height={size} showSubScores={showSubScores} />
      <ButtonGroup showSubScores={showSubScores} setShowSubScores={setShowSubScores} />
      {showSubScores ? <SubScoreTable /> : <DGNBScoreTable />}
    </Container>
  )
}

interface ButtonGroupProps {
  showSubScores: boolean
  setShowSubScores: Dispatch<SetStateAction<boolean>>
}

const ButtonGroup = ({ showSubScores, setShowSubScores }: ButtonGroupProps) => {
  const theme = useMantineTheme()

  return (
    <Group px={0} justify='flex-end'>
      <Switch
        color={theme.colors.light[9]}
        size='lg'
        checked={showSubScores}
        label='Subscores'
        labelPosition='left'
        onLabel='Show'
        offLabel='Hide'
        onChange={(event) => setShowSubScores(event.currentTarget.checked)}
        visibleFrom={'sm'}
      />
      <DownloadSVG />
    </Group>
  )
}
