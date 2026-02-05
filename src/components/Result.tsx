import React from 'react';
import type { Player } from '../types';

interface ResultProps {
    winner: Player | null;
    onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ winner, onRestart }) => {
    return (
        <div className="glass-panel" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#FFD93D' }}>GAME OVER</h1>
            {winner ? (
                <div style={{ margin: '2rem 0' }}>
                    <img src={winner.portrait} alt={winner.name} className="portrait" style={{ width: '200px', height: '200px' }} />
                    <h2 style={{ fontSize: '2rem' }}>{winner.name} THẮNG!</h2>
                    <p style={{ opacity: 0.8 }}>Cái kết viên mãn cho người may mắn nhất!</p>
                </div>
            ) : (
                <p>Không ai sống sót...</p>
            )}

            <button className="button-primary" onClick={onRestart}>
                CHƠI LẠI
            </button>
        </div>
    );
};

export default Result;
