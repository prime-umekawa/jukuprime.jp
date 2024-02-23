export const SITE_NAME = "プライム";
export const DEFAULT_META_TITLE = "プライム｜福岡市のプログラミングスクール";
export const DEFAULT_META_DESCRIPTION =
  "プライムは福岡市の学生・社会人向けプログラミングスクールです。プログラミング初心者～転職・就職を目指す方向けに分かりやすい解説と就業先紹介を行っています。ブログではHTML & CSS, JavaScript, TypeScript, React, Next.jsなどをわかりやすく解説しています！";
export const DEFAULT_OG_IMAGE_PATH = "/static/prime_ogp.png/";
export const APP_ROOT_URL = "https://jukuprime.jp/";

/**
 *カノニカルURLを生成する関数
 * @param path - 追加したいパス。
 * @returns カノニカルURL。
 */

export const createCanonicalURL = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
  return `${APP_ROOT_URL}${normalizedPath}`;
};
