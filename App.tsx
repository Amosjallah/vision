import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { Academics } from './pages/Academics';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { NewsEvents } from './pages/NewsEvents';
import { Contact } from './pages/Contact';

// Academic Departments
import { Creche } from './pages/academics/Creche';
import { Nursery } from './pages/academics/Nursery';
import { Kindergarten } from './pages/academics/Kindergarten';
import { Primary } from './pages/academics/Primary';
import { JHS } from './pages/academics/JHS';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          
          {/* Academic Sub-routes */}
          <Route path="/academics/creche" element={<Creche />} />
          <Route path="/academics/nursery" element={<Nursery />} />
          <Route path="/academics/kindergarten" element={<Kindergarten />} />
          <Route path="/academics/primary" element={<Primary />} />
          <Route path="/academics/jhs" element={<JHS />} />

          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;