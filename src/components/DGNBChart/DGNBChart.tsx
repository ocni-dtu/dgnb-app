import Pie from '@visx/shape/lib/shapes/Pie'
import { Group } from '@visx/group'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useScoresContext } from '@context'
import { InnerTextAndScore, OuterTextAndScore } from './textComponents.tsx'
import { calculateInnerDonutThickness, calculateOuterDonutThickness } from './utils.ts'

interface DGNBChartProps {
  width?: number
  height?: number
  showSubScores: boolean
}

export const DGNBChart = (props: DGNBChartProps) => {
  const { width = 500, height = 500, showSubScores } = props
  const { scores, totalScore } = useScoresContext()
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
          innerRadius={(score) => calculateOuterDonutThickness(score.data, radius, donutThickness, showSubScores)}
          cornerRadius={5}
          padAngle={0.005}
          pieSort={null}
          pieSortValues={null}
          centroid={(xyCoords, arc) => (
            <OuterTextAndScore coordinates={xyCoords} arc={arc} showSubScores={showSubScores} />
          )}
        />
        {showSubScores ? (
          <Pie
            data={scores
              .map((score) =>
                score.subScores.map((subScore) => ({
                  ...subScore,
                  color: score.color,
                  pieValue: score.weight / score.subScores.length,
                })),
              )
              .flat()}
            pieValue={(score) => score.pieValue - 0.075}
            fill={(score) => score.data.color}
            outerRadius={radius - donutThickness - 1.5}
            innerRadius={(score) => calculateInnerDonutThickness(score.data, radius, donutThickness)}
            cornerRadius={5}
            padAngle={0.005}
            centroid={InnerTextAndScore}
            pieSort={null}
            pieSortValues={null}
          />
        ) : null}
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
            {totalScore}
          </tspan>
        </text>
      </Group>
    </svg>
  )
}
