import { AppShell, MantineProvider, rem } from '@mantine/core'
import { AppRouter, ErrorBoundary, Footer, Header, theme } from '@components'
import '@fontsource/rubik'
import '@mantine/core/styles.css'

export const App = () => (
  <MantineProvider theme={theme}>
    <AppShell
      header={{ height: 40, offset: false }}
      footer={{ height: { base: 60, sm: 80 } }}
      padding='md'
      withBorder={false}
    >
      <AppShell.Header>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
      </AppShell.Header>
      <AppShell.Main
        pt={`calc(${rem(40)} + var(--mantine-spacing-md))`}
        pb={`calc(${rem(100)} + var(--mantine-spacing-md))`}
      >
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </AppShell.Main>
      <AppShell.Footer>
        <ErrorBoundary>
          <Footer
            links={[
              { link: 'https://lcax.kongsgaard.eu', label: 'LCAx' },
              {
                link: 'https://epd.kongsgaard.eu',
                label: 'EPD Search',
              },
            ]}
          />
        </ErrorBoundary>
      </AppShell.Footer>
    </AppShell>
  </MantineProvider>
)
