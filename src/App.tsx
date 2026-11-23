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
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  // Sync with browser hash navigation (Back / Forward)
  useEffect(() => {
    const onHashChange = () => {
      setCursorLabel(null);
      setRouteState(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateWork = useCallback(() => {
    setCursorLabel(null);
    window.location.hash = '/';
    setRouteState({ route: 'work', projectSlug: null });
  }, []);

  const navigateAbout = useCallback(() => {
    setCursorLabel(null);
    window.location.hash = '/sobre-mi';
    setRouteState({ route: 'about', projectSlug: null });
  }, []);

  const navigateProject = useCallback((project: Project) => {
    setCursorLabel(null);
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

  return (
    <div className="min-h-dvh bg-[#F5F3EE] text-[#141414]">
      <CustomCursor label={cursorLabel} />

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
              onCursorLabel={setCursorLabel}
            />
          )}

          {routeState.route === 'work' && workViewMode === 'index' && (
            <IndexView
              key="work-index"
              projects={PROJECTS}
              onSelectProject={navigateProject}
              onSwitchToGallery={() => setWorkViewMode('gallery')}
              onCursorLabel={setCursorLabel}
            />
          )}

          {routeState.route === 'project' && activeProject && (
            <CaseStudyView
              key={`project-${activeProject.id}`}
              project={activeProject}
              nextProject={nextProject}
              onBack={navigateWork}
              onSelectProject={navigateProject}
              onCursorLabel={setCursorLabel}
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
