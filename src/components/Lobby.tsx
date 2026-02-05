import React from 'react';
import { CHARACTERS } from '../constants.ts';

interface LobbyProps {
    onStart: () => void;
}

const Lobby: React.FC<LobbyProps> = ({ onStart }) => {
    return (
        <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '900px', margin: '20px' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#FFD93D', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                CÒ QUAY NGA<br />
                <span style={{ fontSize: '1.5rem', color: '#fff', letterSpacing: '4px' }}>PHIÊN BẢN SINH HOẠT LỚP</span>
            </h1>

            <div className="instructions glass-panel" style={{ background: 'rgba(0,0,0,0.2)', marginBottom: '2rem', padding: '1.5rem', textAlign: 'left', fontSize: '0.95rem' }}>
                <h2 style={{ color: '#FFD93D', marginTop: 0, fontSize: '1.2rem' }}>📜 HƯỚNG DẪN CHƠI:</h2>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Mỗi người chơi có <b>3 HP</b>. Ai mất hết HP sẽ bị loại.</li>
                    <li>Trong ổ đạn có 6 viên với các hiệu ứng khác nhau:</li>
                    <ul style={{ listStyleType: 'circle', color: '#ddd' }}>
                        <li><span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Đạn Thường (Đỏ):</span> Gây sát thương -1 HP.</li>
                        <li><span style={{ color: '#f1c40f', fontWeight: 'bold' }}>Đạn Vàng:</span> An toàn tuyệt đối.</li>
                        <li><span style={{ color: '#3498db', fontWeight: 'bold' }}>Đạn Xanh:</span> Nhận thêm 1 lượt bắn ngay lập tức.</li>
                        <li><span style={{ color: '#9b59b6', fontWeight: 'bold' }}>Đạn Tím:</span> Đổi lượt chơi ngẫu nhiên.</li>
                        <li><span style={{ color: '#bdc3c7', fontWeight: 'bold' }}>Đạn Bạc:</span> Cho phép người chơi "nhìn thấu" ổ đạn.</li>
                    </ul>
                    <li>Bạn có thể chọn <b>BẮN</b> hoặc <b>XOAY Ổ ĐẠN</b> để cầu may!</li>
                </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {CHARACTERS.map(char => (
                    <div key={char.id} className="character-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '15px' }}>
                        <img src={char.portrait} alt={char.name} className="portrait" style={{ width: '120px', height: '120px', border: `3px solid ${char.color}` }} />
                        <h3 style={{ margin: '0.5rem 0', color: char.color }}>{char.name}</h3>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8, fontStyle: 'italic', minHeight: '3em' }}>"{char.personality}"</p>
                        <div style={{ background: char.color, color: '#000', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                            {char.skill}
                        </div>
                    </div>
                ))}
            </div>

            <button className="button-primary" onClick={onStart} style={{ padding: '1.2rem 4rem', fontSize: '1.5rem' }}>
                BẮT ĐẦU TRẬN ĐẤU
            </button>
        </div>
    );
};

export default Lobby;
