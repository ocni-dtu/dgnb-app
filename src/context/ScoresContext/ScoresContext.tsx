import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { calculateDGNBTotal } from '@components'

export interface SubScore {
  label: string
  value: number
  weight: number
  max: number
}

export interface DGNBScore {
  label: string
  value: number
  weight: number
  color: string
  subScores: SubScore[]
}

interface ScoreContextInterface {
  scores: DGNBScore[]
  setScores: Dispatch<SetStateAction<DGNBScore[]>>
  totalScore: string
  setTotalScore: Dispatch<SetStateAction<string>>
}

const getRandomInteger = (max: number) => Math.max(30, Math.round(Math.random() * max))

export const ScoresContext = createContext({} as ScoreContextInterface)

type ScoresProps = {
  children: ReactNode
}

export const ScoresContextProvider = ({ children }: ScoresProps) => {
  const [scores, setScores] = useState<DGNBScore[]>([
    {
      label: 'ECO - Economy',
      value: getRandomInteger(100),
      weight: 22.5,
      color: '#00458c',
      subScores: [
        { label: 'ECO1.1', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'ECO2.1', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'ECO2.2', value: getRandomInteger(100), max: 100, weight: 2 },
      ],
    },
    {
      label: 'ENV - Environment',
      value: getRandomInteger(100),
      weight: 22.5,
      color: '#4aae48',
      subScores: [
        { label: 'ENV1.1', value: getRandomInteger(100), max: 100, weight: 8 },
        { label: 'ENV1.2', value: getRandomInteger(100), max: 100, weight: 4 },
        { label: 'ENV1.3', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'ENV2.2', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'ENV2.3', value: getRandomInteger(100), max: 100, weight: 1 },
        { label: 'ENV2.4', value: getRandomInteger(100), max: 100, weight: 2 },
      ],
    },
    {
      label: 'PRO - Process',
      value: getRandomInteger(100),
      weight: 12.5,
      color: '#645faa',
      subScores: [
        { label: 'PRO1.1', value: getRandomInteger(100), max: 100, weight: 1 },
        { label: 'PRO1.4', value: getRandomInteger(110), max: 110, weight: 3 },
        { label: 'PRO1.5', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'PRO1.6', value: getRandomInteger(150), max: 150, weight: 2 },
        { label: 'PRO2.1', value: getRandomInteger(110), max: 110, weight: 2 },
        { label: 'PRO2.2', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'PRO2.3', value: getRandomInteger(110), max: 110, weight: 4 },
        { label: 'PRO2.4', value: getRandomInteger(100), max: 100, weight: 3 },
      ],
    },
    {
      label: 'SITE - Site',
      value: getRandomInteger(100),
      weight: 5,
      color: '#00b6f1',
      subScores: [
        { label: 'SITE1.1', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'SITE1.2', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'SITE1.3', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'SITE1.4', value: getRandomInteger(100), max: 100, weight: 2 },
      ],
    },
    {
      label: 'SOC - Social',
      value: getRandomInteger(100),
      weight: 22.5,
      color: '#a5cf4c',
      subScores: [
        { label: 'SOC1.1', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'SOC1.2', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'SOC1.3', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'SOC1.4', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'SOC1.6', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'SOC2.1', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'SOC3.2', value: getRandomInteger(100), max: 100, weight: 1 },
        { label: 'SOC3.3', value: getRandomInteger(100), max: 100, weight: 2 },
      ],
    },
    {
      label: 'TEC - Technical',
      value: getRandomInteger(100),
      weight: 15,
      color: '#00a4b3',
      subScores: [
        { label: 'TEC1.1', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'TEC1.3', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'TEC1.4', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'TEC1.5', value: getRandomInteger(100), max: 100, weight: 2 },
        { label: 'TEC1.6', value: getRandomInteger(100), max: 100, weight: 3 },
        { label: 'TEC1.8', value: getRandomInteger(100), max: 100, weight: 1 },
        { label: 'TEC3.1', value: getRandomInteger(100), max: 100, weight: 2 },
      ],
    },
  ])
  const total = calculateDGNBTotal(scores)
  const [totalScore, setTotalScore] = useState<string>(total)

  return (
    <ScoresContext.Provider value={{ scores, setScores, totalScore, setTotalScore }}>{children}</ScoresContext.Provider>
  )
}
