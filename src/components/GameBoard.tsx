import React from 'react';
import type { GameState } from '../types.ts';
import HUD from './HUD.tsx';
import Logs from './Logs.tsx';
import Revolver from './Revolver.tsx';

interface GameBoardProps {
    gameState: GameState;
    onFire: () => void;
    onSpin: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState, onFire, onSpin }) => {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    return (
        <div className="game-container" style={{ marginTop: '2rem' }}>
            <HUD players={gameState.players} currentPlayerIndex={gameState.currentPlayerIndex} />

            <div className="main-area glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '500px' }}>
                <h2 style={{ color: currentPlayer.color, textTransform: 'uppercase', letterSpacing: '2px' }}>Lượt của: {currentPlayer.name}</h2>

                <div style={{ margin: '3rem 0' }}>
                    <Revolver chamber={gameState.chamber} chamberIndex={gameState.chamberIndex} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <button className="button-primary" style={{ background: '#ff6b35' }} onClick={onFire}>
                        🔥 BẮP CÒ
                    </button>
                    <button className="button-primary" style={{ background: '#3498db' }} onClick={onSpin}>
                        🔄 XOAY Ổ ĐẠN
                    </button>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                    <p style={{ margin: 0, opacity: 0.8 }}>
                        Kỹ năng đặc biệt: <span style={{ color: currentPlayer.color, fontWeight: 'bold' }}>{currentPlayer.skill}</span>
                    </p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>{currentPlayer.personality}</p>
                </div>
            </div>

            <Logs logs={gameState.logs} />
        </div>
    );
};

export default GameBoard;
