import { useState, useCallback } from 'react';
import type { GameState, Bullet, BulletType } from '../types.ts';
import { CHARACTERS } from '../constants.ts';

const createInitialChamber = (): Bullet[] => {
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
        logs: ['Welcome to Russian Roulette: Cute & Dramatic!'],
        winner: null,
    });

    const fire = useCallback(() => {
        setGameState(prev => {
            const currentPlayer = prev.players[prev.currentPlayerIndex];
            const bullet = prev.chamber[prev.chamberIndex];
            const newLogs = [...prev.logs];
            const newPlayers = [...prev.players];
            const newChamber = [...prev.chamber];

            newLogs.push(`${currentPlayer.name} pulls the trigger...`);
            newChamber[prev.chamberIndex] = { ...bullet, isFired: true };

            let nextIndex = (prev.currentPlayerIndex + 1) % prev.players.length;
            const nextChamberIndex = (prev.chamberIndex + 1) % prev.chamber.length;

            switch (bullet.type) {
                case 'REGULAR':
                    newLogs.push(`BOOM! ${currentPlayer.name} took damage!`);
                    newPlayers[prev.currentPlayerIndex].hp -= 1;
                    break;
                case 'GOLD':
                    newLogs.push(`Click! It's a GOLD bullet. ${currentPlayer.name} is safe and feels lucky!`);
                    break;
                case 'BLUE':
                    newLogs.push(`Click! BLUE bullet! ${currentPlayer.name} gets an extra turn!`);
                    nextIndex = prev.currentPlayerIndex;
                    break;
                case 'PURPLE':
                    newLogs.push(`Click! PURPLE bullet! Turns are swapped!`);
                    nextIndex = (prev.currentPlayerIndex + 2) % prev.players.length;
                    break;
                case 'SILVER':
                    newLogs.push(`Click! SILVER bullet! ${currentPlayer.name} peeks at the next slot.`);
                    break;
                case 'RED':
                    newLogs.push(`Click! RED bullet! ${currentPlayer.name} is skipped next turn.`);
                    break;
            }

            const alivePlayers = newPlayers.filter(p => p.hp > 0);
            if (alivePlayers.length === 1) {
                return {
                    ...prev,
                    players: newPlayers,
                    logs: [...newLogs, `${alivePlayers[0].name} is the winner!`],
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
            logs: [...prev.logs, `${prev.players[prev.currentPlayerIndex].name} spins the chamber!`],
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
            logs: ['Game Started! Good luck everyone!'],
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
