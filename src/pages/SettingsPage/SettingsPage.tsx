import { Container } from '@mantine/core'
import { SettingsTable } from '@components'

interface SettingsPageProps {}

export const SettingsPage = (props: SettingsPageProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props

  return (
    <Container>
      <SettingsTable />
    </Container>
  )
}
