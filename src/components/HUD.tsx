import React from 'react';
import type { Player } from '../types.ts';

interface HUDProps {
    players: Player[];
    currentPlayerIndex: number;
}

const HUD: React.FC<HUDProps> = ({ players, currentPlayerIndex }) => {
    return (
        <div className="hud-area glass-panel" style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem' }}>
            {players.map((p, idx) => (
                <div key={p.id} className={`player-status ${idx === currentPlayerIndex ? 'active' : ''}`} style={{
                    textAlign: 'center',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    border: idx === currentPlayerIndex ? `2px solid ${p.color}` : '2px solid transparent',
                    opacity: p.hp <= 0 ? 0.5 : 1,
                    transition: 'all 0.3s'
                }}>
                    <img src={p.portrait} alt={p.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${p.color}` }} />
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: p.color }}>{p.name}</div>
                    <div className="hp-bar" style={{ width: '80px', margin: '5px auto' }}>
                        <div className="hp-fill" style={{ width: `${(p.hp / 3) * 100}%` }}></div>
                    </div>
                    <div style={{ fontSize: '0.8rem' }}>HP: {p.hp}</div>
                </div>
            ))}
        </div>
    );
};

export default HUD;
