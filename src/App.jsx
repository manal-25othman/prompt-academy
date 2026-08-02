import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import StatsRow from './components/StatsRow';
import Journey from './components/Journey';
import AiIntro from './components/AiIntro';
import PromptDefinition from './components/PromptDefinition';
import Anatomy from './components/Anatomy';
import Builder from './components/Builder';
import Techniques from './components/Techniques';
import Examples from './components/Examples';
import Library from './components/Library';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Chatbot from './components/Chatbot';
import { SECTIONS } from './data';
import { useClipboard } from './hooks/useClipboard';
import { useActiveSection } from './hooks/useActiveSection';

const OBSERVED_IDS = [...SECTIONS.map((s) => s.id), 'journey'];

function App() {
  const { copiedKey, copy } = useClipboard();
  const active = useActiveSection(OBSERVED_IDS, 'ai');

  return (
    <div
      className="app-shell"
      dir="rtl"
      lang="ar"
      style={{ display: 'grid', gridTemplateColumns: '268px 1fr', alignItems: 'start', background: '#E8F1FB' }}
    >
      <Sidebar active={active} copiedKey={copiedKey} copy={copy} />

      <main style={{ minWidth: 0 }}>
        <TopNav active={active} />

        <div className="pad">
          <Hero />
          <StatsRow />
          <Journey />
          <AiIntro />
          <PromptDefinition />
          <Anatomy />
          <Builder copiedKey={copiedKey} copy={copy} />
          <Techniques />
          <Examples copiedKey={copiedKey} copy={copy} />
          <Library copiedKey={copiedKey} copy={copy} />
          <About copiedKey={copiedKey} copy={copy} />
          <Footer />
        </div>
      </main>

      <FloatingWhatsApp />
      <Chatbot />
    </div>
  );
}

export default App;
