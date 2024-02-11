// Layout のデフォルト設定
export const APP_NAME = 'React Hook Form テスト';
//設定した環境変数を呼び出す
//UL_SITE_URLをAPP_ROOT_URLとしている
//環境変数がnull, undefinedの時は空文字にする
export const APP_ROOT_URL = process.env.NEXT_PUBLIC_UL_SITE_URL ?? '';
export const APP_DEFAULT_DESCRIPTION = 'これは、React Hook Formのプロジェクトです。';