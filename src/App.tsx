import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechnologyMarquee } from './components/TechnologyMarquee';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorDotMesh } from './components/CursorDotMesh';
import { SocialSidebar } from './components/SocialSidebar';

function App() {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Cursor-reactive dot mesh background */}
      <CursorDotMesh />
      
      {/* Social media sidebar */}
      <SocialSidebar />
      
      {/* Main content with relative positioning to appear above background */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Skills />
          <ProjectShowcase />
          <TechnologyMarquee />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
