import { Container, Stack, Switch, useMantineTheme } from '@mantine/core'
import { SettingsSubScoreTable, SettingsTable } from '@components'
import { useState } from 'react'

export const SettingsPage = () => {
  const [showSubScores, setShowSubScores] = useState<boolean>(false)
  const theme = useMantineTheme()

  return (
    <Container>
      <Stack>
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
        {showSubScores ? <SettingsSubScoreTable /> : <SettingsTable />}
      </Stack>
    </Container>
  )
}
