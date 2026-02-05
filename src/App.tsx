import React from 'react';
import { useGameLogic } from './hooks/useGameLogic.ts';
import Lobby from './components/Lobby.tsx';
import GameBoard from './components/GameBoard.tsx';
import Result from './components/Result.tsx';

const App: React.FC = () => {
  const { gameState, fire, spin, startGame } = useGameLogic();

  return (
    <div className="app-root">
      {gameState.phase === 'LOBBY' && (
        <Lobby onStart={startGame} />
      )}

      {gameState.phase === 'PLAYING' && (
        <GameBoard
          gameState={gameState}
          onFire={fire}
          onSpin={spin}
        />
      )}

      {gameState.phase === 'RESULT' && (
        <Result
          winner={gameState.winner}
          onRestart={startGame}
        />
      )}
    </div>
  );
};

export default App;
