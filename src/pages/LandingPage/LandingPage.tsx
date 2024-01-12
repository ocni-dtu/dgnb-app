import { DGNBChart, DGNBScore, DGNBScoreTable, DownloadSVG } from '@components'
import { Container } from '@mantine/core'
import { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'

export const LandingPage = () => {
  const { height, width } = useViewportSize()

  const [scores, setScores] = useState<DGNBScore[]>([
    { label: 'ENV - Environment', value: getRandomInteger(), weight: 22.5, color: '#4aae48' },
    { label: 'ECO - Economy', value: getRandomInteger(), weight: 22.5, color: '#00458c' },
    { label: 'SOC - Social', value: getRandomInteger(), weight: 22.5, color: '#a5cf4c' },
    { label: 'TEC - Technical', value: getRandomInteger(), weight: 15, color: '#00a4b3' },
    { label: 'PRO - Process', value: getRandomInteger(), weight: 12.5, color: '#645faa' },
    { label: 'SITE - Site', value: getRandomInteger(), weight: 5, color: '#00b6f1' },
  ])

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

const getRandomInteger = () => Math.max(30, Math.round(Math.random() * 100))
