import { DGNBChart, DGNBScoreTable, DownloadSVG } from '@components'
import { Container } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useScoresContext } from '@context'

export const LandingPage = () => {
  const { height, width } = useViewportSize()
  const { scores, setScores } = useScoresContext()

  const size = Math.min(height, width) * 0.8
  return (
    <Container>
      <DGNBChart scores={scores} width={size} height={size} />
      <ButtonGroup />
      <DGNBScoreTable scores={scores} setScores={setScores} />
    </Container>
  )
}

const ButtonGroup = () => {
  return (
    <Container px={0}>
      <DownloadSVG />
    </Container>
  )
}
