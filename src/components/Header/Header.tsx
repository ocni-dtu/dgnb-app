import { Group, Title, UnstyledButton, useMantineTheme } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const theme = useMantineTheme()
  const location = useLocation()

  return (
    <header style={{ paddingLeft: 5, backgroundColor: theme.colors.light[1] }}>
      <Group justify='space-between'>
        <Title order={1}>DGNB Chart</Title>
        <UnstyledButton px={12}>
          {location.pathname === '/settings' ? (
            <Link style={{ color: theme.black, textDecoration: 'unset' }} to='/'>
              Home
            </Link>
          ) : (
            <Link style={{ color: theme.black, textDecoration: 'unset' }} to='/settings'>
              Settings
            </Link>
          )}
        </UnstyledButton>
      </Group>
    </header>
  )
}
