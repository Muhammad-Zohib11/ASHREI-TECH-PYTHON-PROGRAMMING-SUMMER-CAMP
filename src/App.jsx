import { useState } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext.jsx';
import MainLayout  from './layouts/MainLayout.jsx';
import Onboarding  from './pages/Onboarding.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard   from './pages/Dashboard.jsx';
import LessonsGrid from './pages/LessonsGrid.jsx';
import DayLesson   from './pages/DayLesson.jsx';
import BadgesPage  from './pages/BadgesPage.jsx';

// Inner app — reads onboardingDone from context
function AppInner() {
  const { state } = useProgress();
  const [view, setView]               = useState('landing');
  const [selectedDay, setSelectedDay] = useState(null);

  // First-time users → onboarding (no nav shell needed)
  if (!state.onboardingDone) {
    return <Onboarding />;
  }

  return (
    <MainLayout view={view} setView={setView} setSelectedDay={setSelectedDay}>
      {view === 'landing'   && <LandingPage setView={setView} setSelectedDay={setSelectedDay} />}
      {view === 'dashboard' && <Dashboard   setView={setView} setSelectedDay={setSelectedDay} />}
      {view === 'lessons'   && <LessonsGrid setView={setView} setSelectedDay={setSelectedDay} />}
      {view === 'day'       && selectedDay && (
        <DayLesson day={selectedDay} setView={setView} setSelectedDay={setSelectedDay} />
      )}
      {view === 'badges'    && <BadgesPage />}
    </MainLayout>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppInner />
    </ProgressProvider>
  );
}
