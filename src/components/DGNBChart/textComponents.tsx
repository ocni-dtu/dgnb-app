import { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import { DGNBScore, SubScore } from '@context'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface OuterTextAndScoreProps {
  coordinates: [number, number]
  arc: PieArcDatum<DGNBScore>
  showSubScores: boolean
}
export const OuterTextAndScore = (props: OuterTextAndScoreProps) => {
  const {
    coordinates: [xCoordinate, yCoordinate],
    arc,
    showSubScores,
  } = props
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
      transform={
        showSubScores
          ? `rotate(${((arc.endAngle + arc.startAngle) * 0.5 * 180) / Math.PI}, ${xCoordinate}, ${yCoordinate})`
          : ''
      }
    >
      <tspan>{arc.data.label}</tspan>
      {showSubScores ? null : (
        <tspan x={xCoordinate} dy='1.2em'>
          {arc.data.value}%
        </tspan>
      )}
    </text>
  )
}
export const InnerTextAndScore = ([xCoordinate, yCoordinate]: [number, number], arc: PieArcDatum<SubScore>) => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 48em)`)

  return (
    <text
      fill={isMobile ? theme.black : theme.colors.light[1]}
      x={xCoordinate}
      y={yCoordinate}
      dy='.33em'
      fontSize={`var(--mantine-font-size-md')`}
      fontFamily={theme.fontFamily}
      textAnchor='middle'
      pointerEvents='none'
      transform={`rotate(${
        ((arc.endAngle + arc.startAngle) * 0.5 * 180) / Math.PI - 90
      }, ${xCoordinate}, ${yCoordinate})`}
    >
      <tspan>{arc.data.label}</tspan>
    </text>
  )
}
