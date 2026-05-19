import { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext.jsx';
import MainLayout  from './layouts/MainLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LessonsGrid from './pages/LessonsGrid.jsx';
import DayLesson   from './pages/DayLesson.jsx';
import BadgesPage  from './pages/BadgesPage.jsx';

// Inner app — reads onboardingDone from context
function AppInner() {
  const { state } = useProgress();
  const [view, setView]               = useState('lessons');
  const [selectedDay, setSelectedDay] = useState(null);

  // Scroll to top on every view change or day change
  useEffect(() => { window.scrollTo(0, 0); }, [view, selectedDay]);

  // Not onboarded → go to the 3D landing page
  if (!state.onboardingDone) {
    window.location.replace('/hero.html');
    return null;
  }

  return (
    <MainLayout view={view} setView={setView} setSelectedDay={setSelectedDay}>
      {view === 'landing'   && <LandingPage setView={setView} setSelectedDay={setSelectedDay} />}
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
