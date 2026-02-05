import type { Player, BulletType } from './types';

export const CHAMBER_SIZE = 6;

export const CHARACTERS: Player[] = [
    {
        id: 'phuc_nguyen',
        name: 'Phúc Nguyên',
        hp: 3,
        items: [],
        skill: 'Lucky Star',
        skillCooldown: 0,
        portrait: '/assets/phuc_nguyen_portrait_1770334371495.png',
        color: '#FFD93D',
        personality: 'Lạc quan, may mắn'
    },
    {
        id: 'dang_quyen',
        name: 'Đặng Quyền',
        hp: 3,
        items: [],
        skill: 'Strategist',
        skillCooldown: 0,
        portrait: '/assets/dang_quyen_portrait_1770334389949.png',
        color: '#2C5F8D',
        personality: 'Điềm tĩnh, chiến lược'
    },
    {
        id: 'nguyen_tam',
        name: 'Nguyễn Tâm',
        hp: 3,
        items: [],
        skill: "Beginner's Luck",
        skillCooldown: 0,
        portrait: '/assets/nguyen_tam_portrait_1770334407111.png',
        color: '#FF85B3',
        personality: 'Nhút nhát, dễ thương'
    },
    {
        id: 'the_son',
        name: 'Thế Sơn',
        hp: 3,
        items: [],
        skill: 'Risk Taker',
        skillCooldown: 0,
        portrait: '/assets/the_son_portrait_1770334420526.png',
        color: '#FF6B35',
        personality: 'Dũng cảm, liều lĩnh'
    }
];

export const BULLET_EFFECTS: Record<BulletType, { label: string; description: string; color: string }> = {
    REGULAR: { label: 'Thường', description: 'Viên đạn nguy hiểm!', color: '#7f8c8d' },
    GOLD: { label: 'Vàng', description: 'Cộng điểm / Hồi HP!', color: '#f1c40f' },
    RED: { label: 'Đỏ', description: 'Bị loại 1 lượt!', color: '#e74c3c' },
    BLUE: { label: 'Xanh', description: 'Bắn thêm lần nữa!', color: '#3498db' },
    PURPLE: { label: 'Tím', description: 'Đổi lượt!', color: '#9b59b6' },
    SILVER: { label: 'Bạc', description: 'Xem trước đạn!', color: '#bdc3c7' }
};
