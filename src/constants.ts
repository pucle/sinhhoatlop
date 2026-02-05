import type { Player, BulletType } from './types';

export const CHAMBER_SIZE = 6;

export const CHARACTERS: Player[] = [
    {
        id: 'phuc_nguyen',
        name: 'Phúc Nguyên',
        hp: 3,
        items: [],
        skill: 'Ngôi Sao May Mắn',
        skillCooldown: 0,
        portrait: '/assets/phuc_nguyen_portrait_1770334371495.png',
        color: '#FFD93D',
        personality: 'Lạc quan, luôn tin vào vận may'
    },
    {
        id: 'dang_quyen',
        name: 'Đặng Quyền',
        hp: 3,
        items: [],
        skill: 'Nhà Chiến Thuật',
        skillCooldown: 0,
        portrait: '/assets/dang_quyen_portrait_1770334389949.png',
        color: '#2C5F8D',
        personality: 'Điềm tĩnh, tính toán từng bước'
    },
    {
        id: 'nguyen_tam',
        name: 'Nguyễn Tâm',
        hp: 3,
        items: [],
        skill: 'Vận May Tân Thủ',
        skillCooldown: 0,
        portrait: '/assets/nguyen_tam_portrait_1770334407111.png',
        color: '#FF85B3',
        personality: 'Nhút nhát nhưng cực kỳ đáng yêu'
    },
    {
        id: 'the_son',
        name: 'Thế Sơn',
        hp: 3,
        items: [],
        skill: 'Kẻ Liều Lĩnh',
        skillCooldown: 0,
        portrait: '/assets/the_son_portrait_1770334420526.png',
        color: '#FF6B35',
        personality: 'Dũng cảm, không sợ hiểm nguy'
    }
];

export const BULLET_EFFECTS: Record<BulletType, { label: string; description: string; color: string }> = {
    REGULAR: { label: 'Đạn Thường', description: 'BÙM! Mất 1 HP.', color: '#e74c3c' },
    GOLD: { label: 'Đạn Vàng', description: 'An toàn! Bạn thật may mắn.', color: '#f1c40f' },
    RED: { label: 'Đạn Đỏ', description: 'Bị loại khỏi vòng sau!', color: '#c0392b' },
    BLUE: { label: 'Đạn Xanh', description: 'Nhận thêm 1 lượt bắn.', color: '#3498db' },
    PURPLE: { label: 'Đạn Tím', description: 'Đổi lượt với người kế tiếp!', color: '#9b59b6' },
    SILVER: { label: 'Đạn Bạc', description: 'Xem trước vị trí đạn kế!', color: '#bdc3c7' }
};
