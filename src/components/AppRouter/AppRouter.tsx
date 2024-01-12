import React, { lazy } from 'react'
import { Route, Routes } from 'react-router'
import { Loading } from '@components'

const LandingPage = lazy(() => import('../../pages/LandingPage'))
const SettingsPage = lazy(() => import('../../pages/SettingsPage'))

export const AppRouter = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='*' element={<LandingPage />} />
    </Routes>
  </React.Suspense>
)
