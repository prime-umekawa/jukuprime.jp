export type Route = {
  key: string;
  url: string;
  title: string;
  description?: string;
};

export const Routes = {
  INDEX: {
    key: 'INDEX',
    url: '/',
    title: '素材ヘブン｜クリエイティブ素材管理サイトが簡単に作れるサービス',
    description:
      '『素材ヘブン』とは、アフィリエイター・広告代理店に向けてクリエイティブ素材が共有できるサイトを簡単に作成できるサービスです。',
  },
  COMPLETE: {
    key: 'COMPLETE',
    url: '/complete',
    title: '送信完了',
    description:
      '『素材ヘブン』とは、アフィリエイター・広告代理店に向けてクリエイティブ素材が共有できるサイトを簡単に作成できるサービスです。',
  },
  TERMS: {
    key: 'TERMS',
    url: '/info/terms',
    title: '利用規約',
    description: '『素材ヘブン』の利用規約です。',
  },
  USER_GUIDE: {
    key: 'USER_GUIDE',
    url: 'https://sozai-heaven.notion.site/',
    title: 'ご利用ガイド',
    description: '『素材ヘブン』のご利用ガイドです。',
  },
  PRIVACY_POLICY: {
    key: 'PRIVACY_POLICY',
    url: '/info/privacy-policy',
    title: 'プライバシーポリシー',
    description: '『素材ヘブン』のプライバシーポリシーです。',
  },
  TOKUSHOHO: {
    key: 'TOKUSHOHO',
    url: '/info/tokushoho',
    title: '特定商取引法に基づく表記',
    description: '『素材ヘブン』の特定商取引法に基づく表記です。',
  },
  CONTACT: {
    key: 'CONTACT',
    url: '/contact',
    title: 'お問い合わせ',
    description: '『素材ヘブン』に関するお問い合わせフォームです。',
  },
  CONTACT_PARTNER: {
    key: 'CONTACT_PARTNER',
    url: '/contact/partner',
    title: '販売パートナー申請',
    description:
      '『素材ヘブン』の販売パートナーをご希望の方はこちらのフォームよりご申請いただけます。',
  },
  COMPANY: {
    key: 'COMPANY',
    url: 'https://www.re-terior.com/', // リテリアのHP
    title: '運営会社',
  },
  // 遷移先
  CHATWORK: {
    key: 'CHATWORK',
    url: 'https://www.chatwork.com/g/bvx4x00ftxrzc2',
    title: 'Chatwork',
  },
} as const;

export type Routes = keyof typeof Routes;
