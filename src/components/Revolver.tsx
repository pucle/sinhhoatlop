import React from 'react';
import type { Bullet } from '../types';

interface RevolverProps {
    chamber: Bullet[];
    chamberIndex: number;
}

const Revolver: React.FC<RevolverProps> = ({ chamber, chamberIndex }) => {
    return (
        <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '10px solid #555',
                background: '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${chamberIndex * -(360 / chamber.length)}deg)`,
                transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                {chamber.map((bullet, i) => {
                    const angle = i * (360 / chamber.length);
                    return (
                        <div key={i} style={{
                            position: 'absolute',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: bullet.isFired ? '#111' : '#888',
                            border: bullet.isFired ? 'none' : '2px solid #aaa',
                            transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: bullet.isFired ? 'inset 0 0 10px #000' : 'none'
                        }}>
                            {!bullet.isFired && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#f1c40f' }}></div>}
                        </div>
                    );
                })}
            </div>

            <div style={{
                position: 'absolute',
                top: '-20px',
                left: 'calc(50% - 15px)',
                width: '30px',
                height: '40px',
                background: '#ff6b35',
                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                zIndex: 10
            }}></div>
        </div>
    );
};

export default Revolver;
