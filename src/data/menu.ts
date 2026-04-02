export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'trial' | 'shake' | 'meal' | 'supplement';
  popular?: boolean;
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: '【專屬優惠】營養套餐體驗',
    description: '憑券專屬！包含特調營養奶昔一杯與專業健康諮詢一次。每人限體驗乙次。',
    price: 49,
    image: 'https://images.unsplash.com/photo-1623366302587-bca5faecffab?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'trial',
    popular: true,
    tags: ['增肌減脂', '調整腸胃']
  },
  {
    id: '2',
    name: '活力增肌高蛋白奶昔',
    description: '富含優質蛋白質與必需胺基酸，運動後補充的最佳選擇，幫助肌肉修復與生長。',
    price: 120,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'shake',
    popular: true,
    tags: ['增肌減脂', '運動營養補充']
  },
  {
    id: '3',
    name: '順暢高纖綠拿鐵',
    description: '多種新鮮蔬果與膳食纖維調配，幫助消化道機能，調整體質。',
    price: 110,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'shake',
    tags: ['調整腸胃']
  },
  {
    id: '4',
    name: '兒童成長營養飲',
    description: '專為成長期兒童設計，富含鈣質與多種維生素，好喝又健康。',
    price: 95,
    image: 'https://images.unsplash.com/photo-1570696516155-820b2581280b?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'shake',
    popular: true,
    tags: ['兒童健康長高營養']
  },
  {
    id: '5',
    name: '銀髮族活力保養餐',
    description: '易咀嚼、好吸收的營養配置，補充長輩每日所需關鍵營養素。',
    price: 150,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'meal',
    tags: ['銀髮族保養']
  },
  {
    id: '6',
    name: '孕期滋補營養餐',
    description: '提供孕媽咪與寶寶所需的葉酸、鐵質與優質蛋白，健康零負擔。',
    price: 160,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'meal',
    tags: ['孕期營養']
  },
  {
    id: '7',
    name: '運動前能量果昔',
    description: '提供運動前所需的快速能量，提升運動表現。',
    price: 100,
    image: 'https://images.unsplash.com/photo-1502741224143-9038517ea861?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'shake',
    tags: ['運動營養補充']
  },
  {
    id: '8',
    name: '綜合維生素發泡飲',
    description: '清爽解渴，隨時補充流失的水分與維生素。',
    price: 60,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400&h=300',
    category: 'supplement',
  }
];
