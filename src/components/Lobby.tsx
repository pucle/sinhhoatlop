import React from 'react';
import { CHARACTERS } from '../constants.ts';

interface LobbyProps {
    onStart: () => void;
}

const Lobby: React.FC<LobbyProps> = ({ onStart }) => {
    return (
        <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#FFD93D' }}>
                Russian Roulette<br />
                <span style={{ fontSize: '1.5rem', color: '#fff' }}>Cute & Dramatic</span>
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {CHARACTERS.map(char => (
                    <div key={char.id} className="character-card">
                        <img src={char.portrait} alt={char.name} className="portrait" />
                        <h3 style={{ margin: '0.5rem 0' }}>{char.name}</h3>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>{char.personality}</p>
                        <span style={{ fontSize: '0.7rem', color: char.color, fontWeight: 'bold' }}>{char.skill}</span>
                    </div>
                ))}
            </div>

            <button className="button-primary" onClick={onStart}>
                CHƠI NGAY
            </button>
        </div>
    );
};

export default Lobby;
