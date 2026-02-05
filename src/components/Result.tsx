import React from 'react';
import type { Player } from '../types.ts';

interface ResultProps {
    winner: Player | null;
    onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ winner, onRestart }) => {
    return (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
            <h1 style={{ fontSize: '4rem', color: '#FFD93D', marginBottom: '1rem' }}>KẾT THÚC</h1>
            {winner ? (
                <div style={{ margin: '2rem 0' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img src={winner.portrait} alt={winner.name} className="portrait" style={{ width: '250px', height: '250px', border: `8px solid ${winner.color}` }} />
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '3rem' }}>👑</div>
                    </div>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem', color: winner.color }}>{winner.name} THẮNG!</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Bản lĩnh và sự may mắn đã giúp bạn sống sót!</p>
                </div>
            ) : (
                <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>Không còn ai sống sót trên chiến trường...</p>
            )}

            <button className="button-primary" onClick={onRestart} style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                🎮 CHƠI LẠI
            </button>
        </div>
    );
};

export default Result;
