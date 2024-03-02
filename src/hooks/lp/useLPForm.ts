import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm, Control, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { Option } from '@/components/common/parts/CommonSelect';
import { useMessageDialog } from '@/hooks/common/useMessageDialog';
import { useLPFormPost } from '@/hooks/lp/api/useLPFormPost';
import { formMessages } from '@/lib/data/messages';
import { Routes } from '@/lib/data/routes';
import { LPFormParam } from '@/lib/type/contact';

// 事業内容の選択肢
export const BUSINESS_OPTIONS: Option[] = [
  { key: '0', label: '選択してください', value: '' },
  { key: '1', label: 'メーカー', value: '1' },
  { key: '2', label: '広告代理店', value: '2' },
  { key: '3', label: 'メディア', value: '3' },
  { key: '99', label: 'その他', value: '99' },
];

export const HOW_DID_YOU_KNOW_OPTIONS: Option[] = [
  { key: '1', label: 'Web検索', value: '1' },
  { key: '2', label: 'セミナー、カンファレンスなど', value: '2' },
  { key: '3', label: '知人からの紹介・クチコミ', value: '3' },
  { key: '4', label: 'SNSの情報（Facebook）', value: '4' },
  { key: '5', label: 'SNSの情報（Twitter）', value: '5' },
  { key: '6', label: 'SNSの情報（TikTok）', value: '6' },
  { key: '7', label: 'Facebook広告', value: '7' },
  { key: '8', label: 'Twitter広告', value: '8' },
  { key: '9', label: 'その他', value: '9' },
];

// ////////////////////////////////////////////////////////////////
// schema 定義
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('お名前') })
    .max(30, { message: formMessages.max('お名前', 30) }),
  email: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('メールアドレス') })
    .max(100, { message: formMessages.max('メールアドレス', 100) })
    .email({ message: formMessages.email }),
  tel: z
    .string({ required_error: formMessages.required('電話番号') })
    .trim()
    .max(30, { message: formMessages.max('電話番号', 30) })
    .regex(/^.*[0-9]$/, { message: formMessages.tel }),
  company: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('会社名') })
    .max(50, { message: formMessages.max('会社名', 50) }),
  business: z
    .string()
    .trim()
    .max(50, { message: formMessages.max('事業内容', 50) })
    .optional(),
  howDidYouKnow: z.array(z.string()),
  body: z
    .string()
    .trim()
    .max(2000, { message: formMessages.max('お問い合わせ内容', 2000) })
    .optional(),
});

// schema から型を抽出
type LPFormInput = z.infer<typeof schema>;

// フォームのデフォルト値
const DEFAULT_VALUES: LPFormInput = {
  name: '',
  email: '',
  tel: '',
  company: '',
  business: '',
  howDidYouKnow: [],
  body: '',
};

// ////////////////////////////////////////////////////////////////
// hook
type UseLPForm = () => {
  control: Control<LPFormInput>;
  handleClickSubmit: () => void;
};

export const useLPForm: UseLPForm = () => {
  // React hook form
  const { control, handleSubmit } = useForm<LPFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });

  const apiLPFormPost = useLPFormPost();
  const router = useRouter();
  const { openMessageDialog } = useMessageDialog();
  const onSubmit: SubmitHandler<LPFormInput> = async (data) => {
    const { name, email, tel, company, business, howDidYouKnow, body } = data;

    // 選択された事業内容を取得
    const businessOption = BUSINESS_OPTIONS.find((option) => option.value === business);

    // 選択されたどのようにして知りましたか？の選択肢を取得
    const howDidYouKnowOptions = HOW_DID_YOU_KNOW_OPTIONS.filter((option) =>
      howDidYouKnow.includes(option.value),
    );

    const param: LPFormParam = {
      name,
      email,
      tel,
      company,
      business: businessOption?.value && businessOption.label, // 事業内容は日本語を送る
      howDidYouKnow: howDidYouKnowOptions.map((option) => option.label), // どのようにして知りましたか？は日本語を送る
      body,
    };

    // メールを送信する
    const isSuccess = await apiLPFormPost.execute(param);

    // 失敗時の処理
    if (!isSuccess) {
      await openMessageDialog({
        title: '送信に失敗しました',
        content:
          '大変申し訳ありませんが、何らかの理由でフォームの送信に失敗しました。もう一度試しても同じメッセージが表示される場合、support@reterior.jp 宛に直接お問い合わせください。',
      });
      return;
    }

    // 成功時の処理
    void router.push(Routes.COMPLETE.url);
    return;
  };

  return {
    control,
    handleClickSubmit: handleSubmit(onSubmit),
  };
};
