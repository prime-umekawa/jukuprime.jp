import Container from '@/components/common/parts/Container';
import InputRow from '@/components/common/parts/InputRow';
import MyImage from '@/components/common/parts/MyImage';
import LPFormButton from '@/components/lp/parts/LPFormButton';
import RhfCheckboxGroup from '@/components/rhf/RhfCheckboxGroup';
import RhfInput from '@/components/rhf/RhfInput';
import RhfSelect from '@/components/rhf/RhfSelect';
import RhfTextarea from '@/components/rhf/RhfTextarea';
import { BUSINESS_OPTIONS, HOW_DID_YOU_KNOW_OPTIONS, useLPForm } from '@/hooks/lp/useLPForm';
import { Routes } from '@/lib/data/routes';

const LPForm = (): JSX.Element => {
  const { control, handleClickSubmit } = useLPForm();

  // 入力フォーム
  return (
    <Container maxWidth="max-w-3xl" className="pb-20">
      {/* Chatwork への誘導 */}
      <p className="text-base sm:text-lg">
        実際の素材共有サイトを閲覧したい方・資料請求をご希望の方はチャットまたはメール送信フォームよりお問い合わせください。
      </p>

      <div className="flex w-full flex-col items-center justify-center py-14">
        <a
          href={Routes.CHATWORK.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex w-full flex-row items-center justify-center gap-2 rounded-full border-4 border-theme bg-white px-10 py-4 text-center text-base font-bold text-theme shadow-[6px_6px_6px_#00000033] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_10px_#00000033] sm:w-auto sm:px-20 sm:py-6 sm:text-2xl xl:text-3xl"
        >
          <MyImage
            src="/util/cw_logo_hz_color.svg"
            width={1200}
            height={360}
            alt=""
            className="w-32 sm:w-48"
          />
          で相談する
        </a>
        <p className="mt-10 text-left text-base sm:text-center sm:text-lg">
          弊社スタッフがチャットで直接対応致します！気軽にご質問ください。
        </p>
      </div>

      <div className="my-20 flex flex-row items-center gap-4">
        <span className="block h-[1px] w-full bg-theme" />
        <p className="shrink-0">または</p>
        <span className="block h-[1px] w-full bg-theme" />
      </div>

      {/* メールへの誘導 */}
      <h3 className="mb-14 text-center text-2xl font-bold">メールでお問い合わせ</h3>
      <p className="text-base sm:text-lg">
        メールでのやり取りをご希望の方は、以下のフォームよりお問い合わせください。弊社スタッフがメールにてご対応いたします。
      </p>

      {/* お名前 */}
      <div className="mt-12">
        <InputRow label="お名前" isRequired>
          <RhfInput
            name="name"
            control={control}
            inputProps={{
              type: 'text',
              placeholder: '例）山田太郎',
              className: 'w-full',
            }}
          />
        </InputRow>
      </div>

      {/* メールアドレス */}
      <div className="mt-8">
        <InputRow label="メールアドレス" isRequired>
          <RhfInput
            name="email"
            control={control}
            inputProps={{
              type: 'email',
              placeholder: '例）example@gmail.com',
              className: 'w-full',
            }}
          />
        </InputRow>
      </div>

      {/* 電話番号 */}
      <div className="mt-8">
        <InputRow label="電話番号" isRequired>
          <RhfInput
            name="tel"
            control={control}
            inputProps={{
              type: 'tel',
              placeholder: '例）090-1234-5678',
              className: 'w-full',
            }}
          />
        </InputRow>
      </div>

      {/* 会社名 */}
      <div className="mt-8">
        <InputRow label="会社名" isRequired>
          <RhfInput
            name="company"
            control={control}
            inputProps={{
              type: 'text',
              placeholder: '例）株式会社〇〇',
              className: 'w-full',
            }}
          />
        </InputRow>
      </div>

      {/* 事業内容 */}
      <div className="mt-8">
        <InputRow label="事業内容">
          <RhfSelect
            name="business"
            control={control}
            options={BUSINESS_OPTIONS}
            selectProps={{ placeholder: '選択してください' }}
          />
        </InputRow>
      </div>

      {/* どのようにして素材ヘブンを知りましたか？ */}
      <div className="mt-8">
        <InputRow label="どのようにして素材ヘブンを知りましたか？（複数選択可）">
          <RhfCheckboxGroup
            name="howDidYouKnow"
            control={control}
            options={HOW_DID_YOU_KNOW_OPTIONS}
          />
        </InputRow>
      </div>

      {/* お問い合わせ内容 */}
      <div className="mt-8">
        <InputRow label="お問い合わせ内容">
          <RhfTextarea
            name="body"
            control={control}
            inputProps={{
              rows: 10,
              placeholder: '詳しいお問い合わせ内容を入力してください',
              className: 'w-full',
            }}
          />
        </InputRow>
      </div>

      {/* 送信ボタン */}
      <div className="mt-20 text-center">
        <LPFormButton label="送信する" onClick={handleClickSubmit} />
      </div>
    </Container>
  );
};

export default LPForm;
