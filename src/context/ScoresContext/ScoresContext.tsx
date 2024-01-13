import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export interface DGNBScore {
  label: string
  value: number
  weight: number
  color: string
}

const getRandomInteger = () => Math.max(30, Math.round(Math.random() * 100))

export const ScoresContext = createContext(
  {} as { scores: DGNBScore[]; setScores: Dispatch<SetStateAction<DGNBScore[]>> },
)

type ScoresProps = {
  children: ReactNode
}

export const ScoresContextProvider = ({ children }: ScoresProps) => {
  const [scores, setScores] = useState<DGNBScore[]>([
    { label: 'ENV - Environment', value: getRandomInteger(), weight: 22.5, color: '#4aae48' },
    { label: 'ECO - Economy', value: getRandomInteger(), weight: 22.5, color: '#00458c' },
    { label: 'SOC - Social', value: getRandomInteger(), weight: 22.5, color: '#a5cf4c' },
    { label: 'TEC - Technical', value: getRandomInteger(), weight: 15, color: '#00a4b3' },
    { label: 'PRO - Process', value: getRandomInteger(), weight: 12.5, color: '#645faa' },
    { label: 'SITE - Site', value: getRandomInteger(), weight: 5, color: '#00b6f1' },
  ])

  return <ScoresContext.Provider value={{ scores, setScores }}>{children}</ScoresContext.Provider>
}
