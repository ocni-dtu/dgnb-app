import { useContext } from 'react'
import { ScoresContext } from '@context'

export const useScoresContext = () => {
  const context = useContext(ScoresContext)

  if (context === undefined) {
    throw new Error('useScoresContext was used outside of its Provider')
  }

  return context
}
