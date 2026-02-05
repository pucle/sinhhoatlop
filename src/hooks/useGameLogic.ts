import { useState, useCallback } from 'react';
import type { GameState, Bullet, BulletType } from '../types.ts';
import { CHARACTERS } from '../constants.ts';

const createInitialChamber = (): Bullet[] => {
    // 1 Regular, 2 Gold, 1 Blue, 1 Purple, 1 Silver
    const bullets: BulletType[] = ['REGULAR', 'GOLD', 'BLUE', 'PURPLE', 'SILVER', 'GOLD'];
    return bullets.sort(() => Math.random() - 0.5).map(type => ({ type, isFired: false }));
};

export const useGameLogic = () => {
    const [gameState, setGameState] = useState<GameState>({
        players: CHARACTERS.map(c => ({ ...c })),
        currentPlayerIndex: 0,
        chamber: createInitialChamber(),
        chamberIndex: 0,
        phase: 'LOBBY',
        logs: ['Chào mừng tới Cò Quay Nga: Phiên bản Vui Nhộn!'],
        winner: null,
    });

    const fire = useCallback(() => {
        setGameState(prev => {
            const currentPlayer = prev.players[prev.currentPlayerIndex];
            const bullet = prev.chamber[prev.chamberIndex];
            const newLogs = [...prev.logs];
            const newPlayers = [...prev.players];
            const newChamber = [...prev.chamber];

            newLogs.push(`${currentPlayer.name} bóp cò...`);
            newChamber[prev.chamberIndex] = { ...bullet, isFired: true };

            let nextIndex = (prev.currentPlayerIndex + 1) % prev.players.length;
            const nextChamberIndex = (prev.chamberIndex + 1) % prev.chamber.length;

            switch (bullet.type) {
                case 'REGULAR':
                    newLogs.push(`BÙM! ${currentPlayer.name} bị trúng đạn!`);
                    newPlayers[prev.currentPlayerIndex].hp -= 1;
                    break;
                case 'GOLD':
                    newLogs.push(`Cạch! Đạn VÀNG. ${currentPlayer.name} an toàn và rất may mắn!`);
                    break;
                case 'BLUE':
                    newLogs.push(`Cạch! Đạn XANH! ${currentPlayer.name} được bắn thêm lượt nữa!`);
                    nextIndex = prev.currentPlayerIndex;
                    break;
                case 'PURPLE':
                    newLogs.push(`Cạch! Đạn TÍM! Đổi lượt chơi!`);
                    nextIndex = (prev.currentPlayerIndex + 2) % prev.players.length;
                    break;
                case 'SILVER':
                    newLogs.push(`Cạch! Đạn BẠC! ${currentPlayer.name} đã thám thính được viên đạn tiếp theo.`);
                    break;
                case 'RED':
                    newLogs.push(`Cạch! Đạn ĐỎ! ${currentPlayer.name} sẽ bị mất lượt sau.`);
                    break;
            }

            const alivePlayers = newPlayers.filter(p => p.hp > 0);
            if (alivePlayers.length === 1) {
                return {
                    ...prev,
                    players: newPlayers,
                    logs: [...newLogs, `Chúc mừng! ${alivePlayers[0].name} là người chiến thắng duy nhất!`],
                    phase: 'RESULT',
                    winner: alivePlayers[0],
                };
            }

            while (newPlayers[nextIndex].hp <= 0) {
                nextIndex = (nextIndex + 1) % newPlayers.length;
            }

            return {
                ...prev,
                players: newPlayers,
                chamber: newChamber,
                chamberIndex: nextChamberIndex,
                currentPlayerIndex: nextIndex,
                logs: newLogs,
            };
        });
    }, []);

    const spin = useCallback(() => {
        setGameState(prev => ({
            ...prev,
            chamberIndex: Math.floor(Math.random() * prev.chamber.length),
            logs: [...prev.logs, `${prev.players[prev.currentPlayerIndex].name} xoay ổ đạn!`],
        }));
    }, []);

    const startGame = useCallback(() => {
        setGameState(prev => ({
            ...prev,
            phase: 'PLAYING',
            chamber: createInitialChamber(),
            chamberIndex: 0,
            currentPlayerIndex: 0,
            players: CHARACTERS.map(c => ({ ...c })),
            logs: ['Trận đấu bắt đầu! Chúc mọi người may mắn!'],
            winner: null,
        }));
    }, []);

    return {
        gameState,
        fire,
        spin,
        startGame,
    };
};
