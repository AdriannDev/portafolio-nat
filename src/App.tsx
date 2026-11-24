import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from './data/portfolio';
import { Header, type ActiveRoute, type WorkViewMode } from './components/Header';
import { HorizontalGallery } from './components/HorizontalGallery';
import { IndexView } from './components/IndexView';
import { CaseStudyView } from './components/CaseStudyView';
import { AboutView } from './components/AboutView';
import { CustomCursor } from './components/CustomCursor';

interface RouteState {
  route: ActiveRoute;
  projectSlug: string | null;
}

function parseHash(): RouteState {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === '/sobre-mi') {
    return { route: 'about', projectSlug: null };
  }
  if (hash.startsWith('/proyecto/')) {
    const slug = hash.replace('/proyecto/', '');
    const exists = PROJECTS.some((p) => p.slug === slug);
    if (exists) {
      return { route: 'project', projectSlug: slug };
    }
  }
  return { route: 'work', projectSlug: null };
}

export default function App() {
  const [routeState, setRouteState] = useState<RouteState>(() => parseHash());
  const [workViewMode, setWorkViewMode] = useState<WorkViewMode>('gallery');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Sync with browser hash navigation (Back / Forward)
  useEffect(() => {
    const onHashChange = () => {
      setRouteState(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateWork = useCallback(() => {
    window.location.hash = '/';
    setRouteState({ route: 'work', projectSlug: null });
  }, []);

  const navigateAbout = useCallback(() => {
    window.location.hash = '/sobre-mi';
    setRouteState({ route: 'about', projectSlug: null });
  }, []);

  const navigateProject = useCallback((project: Project) => {
    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    if (idx !== -1) setActiveGalleryIndex(idx);
    window.location.hash = `/proyecto/${project.slug}`;
    setRouteState({ route: 'project', projectSlug: project.slug });
  }, []);

  const activeProject = useMemo(() => {
    if (!routeState.projectSlug) return null;
    return PROJECTS.find((p) => p.slug === routeState.projectSlug) ?? PROJECTS[0];
  }, [routeState.projectSlug]);

  const nextProject = useMemo(() => {
    if (!activeProject) return PROJECTS[0];
    const currentIdx = PROJECTS.findIndex((p) => p.id === activeProject.id);
    return PROJECTS[(currentIdx + 1) % PROJECTS.length];
  }, [activeProject]);

  const cursorResetKey = `${routeState.route}-${routeState.projectSlug ?? ''}-${workViewMode}`;

  return (
    <div className="min-h-dvh bg-[#F5F3EE] text-[#141414]">
      <CustomCursor
        resetKey={cursorResetKey}
        disabled={routeState.route === 'about'}
      />

      <Header
        activeRoute={routeState.route}
        workViewMode={workViewMode}
        projectCount={PROJECTS.length}
        onNavigateWork={navigateWork}
        onNavigateAbout={navigateAbout}
        onChangeWorkMode={setWorkViewMode}
      />

      <main>
        <AnimatePresence mode="wait">
          {routeState.route === 'work' && workViewMode === 'gallery' && (
            <HorizontalGallery
              key="work-gallery"
              projects={PROJECTS}
              activeIndex={activeGalleryIndex}
              onActiveIndexChange={setActiveGalleryIndex}
              onSelectProject={navigateProject}
              onSwitchToIndex={() => setWorkViewMode('index')}
            />
          )}

          {routeState.route === 'work' && workViewMode === 'index' && (
            <IndexView
              key="work-index"
              projects={PROJECTS}
              onSelectProject={navigateProject}
              onSwitchToGallery={() => setWorkViewMode('gallery')}
            />
          )}

          {routeState.route === 'project' && activeProject && (
            <CaseStudyView
              key={`project-${activeProject.id}`}
              project={activeProject}
              nextProject={nextProject}
              onBack={navigateWork}
              onSelectProject={navigateProject}
            />
          )}

          {routeState.route === 'about' && (
            <AboutView key="about-page" onNavigateWork={navigateWork} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
