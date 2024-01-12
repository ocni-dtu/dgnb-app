import Pie, { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import { Group } from '@visx/group'
import { calculateDGNBTotal, DGNBScore } from '../DGNBScoreTable'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface DGNBChartProps {
  width?: number
  height?: number
  scores: DGNBScore[]
}

export const DGNBChart = (props: DGNBChartProps) => {
  const { width = 500, height = 500, scores } = props
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 48em)`)

  const margin = { top: 20, right: 20, bottom: 20, left: 20 }
  if (width < 10) return null

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const radius = Math.min(innerWidth, innerHeight) / 2
  const centerY = innerHeight / 2
  const centerX = innerWidth / 2
  const donutThickness = 50

  return (
    <svg width={width} height={height}>
      <rect rx={14} width={width} height={height} fill="url('#visx-pie-gradient')" />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={scores}
          pieValue={(score) => score.weight}
          fill={(score) => score.data.color}
          outerRadius={radius}
          innerRadius={(score) => calculateDonutThickness(score.data, radius, donutThickness)}
          cornerRadius={5}
          padAngle={0.005}
          centroid={TextAndScore}
        ></Pie>
        <text
          fill={theme.black}
          dy='.33em'
          fontSize={`var(--mantine-font-size${isMobile ? '' : '-xl'})`}
          fontWeight={theme.headings.fontWeight}
          fontFamily={theme.fontFamily}
          textAnchor='middle'
          pointerEvents='none'
        >
          <tspan>Total Score</tspan>
          <tspan x='0' dy='1.2em'>
            {calculateDGNBTotal(scores)}
          </tspan>
        </text>
      </Group>
    </svg>
  )
}

const calculateDonutThickness = (score: DGNBScore, radius: number, thickness: number) => {
  return radius - (radius - thickness) * score.value * 0.01
}

const TextAndScore = ([xCoordinate, yCoordinate]: [number, number], arc: PieArcDatum<DGNBScore>) => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 48em)`)

  return (
    <text
      fill={isMobile ? theme.black : theme.colors.light[1]}
      x={xCoordinate}
      y={yCoordinate}
      dy='.33em'
      fontSize={`var(--mantine-font-size-${isMobile ? 'xs' : 'md'})`}
      fontFamily={theme.fontFamily}
      textAnchor='middle'
      pointerEvents='none'
    >
      <tspan>{arc.data.label}</tspan>
      <tspan x={xCoordinate} dy='1.2em'>
        {arc.data.value}%
      </tspan>
    </text>
  )
}
