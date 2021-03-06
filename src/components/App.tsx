import React from 'react';
import { Route, MemoryRouter, Routes } from 'react-router';
import { BuildsPage, Builds } from '../pages/BuildsPage';
import { AppStateProvider } from '../state';
import { Settings } from './Settings';

export const App = () => {
  return (
    <AppStateProvider>
      <>
        <Routes>
          <Route path="/" element={<BuildsPage />} />
        </Routes>
        <Settings />
      </>
    </AppStateProvider>
  );
};

// TODO: allow pass in settings as props
// When some shared settings workflow
// will be established
export const TravisCIWidget = () => {
  return (
    <MemoryRouter initialEntries={['/travisci']}>
      <AppStateProvider>
        <>
          <Routes>
            <Route path="/travisci" element={<Builds />} />
          </Routes>
          <Settings />
        </>
      </AppStateProvider>
    </MemoryRouter>
  );
};
