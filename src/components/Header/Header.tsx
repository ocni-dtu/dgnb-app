import { Title, useMantineTheme } from '@mantine/core'

export const Header = () => {
  const theme = useMantineTheme()

  return (
    <header style={{ paddingLeft: 5, backgroundColor: theme.colors.light[1] }}>
      <Title order={1}>DGNB Chart</Title>
    </header>
  )
}
