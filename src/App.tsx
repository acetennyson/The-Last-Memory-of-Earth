import React from 'react';
import { useGame } from './hooks/useGame';
import { sampleContent } from './data/sampleContent';
import BootScreen from './pages/BootScreen';
import IntroScreen from './pages/IntroScreen';
import ArchiveScreen from './pages/ArchiveScreen';
import MemoryScreen from './pages/MemoryScreen';
import InvestigationScreen from './pages/InvestigationScreen';
import CorruptedScreen from './pages/CorruptedScreen';
import EndingScreen from './pages/EndingScreen';
import HistoryBookScreen from './pages/HistoryBookScreen';
import AmbientBackground from './components/AmbientBackground';
import './styles/cyber.css';

export default function App() {
  const game = useGame(sampleContent);

  const screens: Record<number, React.ReactNode> = {
    [game.Stage.BOOT]: <BootScreen onComplete={game.boot} />,
    [game.Stage.INTRO]: <IntroScreen onStart={game.start} />,
    [game.Stage.ARCHIVE]: <ArchiveScreen game={game} memories={sampleContent.memories} />,
    [game.Stage.MEMORY]: <MemoryScreen game={game} />,
    [game.Stage.INVESTIGATION]: <InvestigationScreen game={game} />,
    [game.Stage.CORRUPTED]: <CorruptedScreen game={game} />,
    [game.Stage.ENDING]: <EndingScreen game={game} />,
    [game.Stage.HISTORY_BOOK]: <HistoryBookScreen game={game} />,
  };

  return (
    <div className="cyber-container">
      {screens[game.stage] || null}
    </div>
  );
}
