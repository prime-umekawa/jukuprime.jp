const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // パージの対象ファイルを設定
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        // 開発で使用するカラーを設定する
        // `DEFAULT` で設定しているものは、`text-theme` や `bg-primary` のように使用できる
        // それ以外は、 `text-theme-light` や `bg-primary-dark` のように使用する
        // テキストなどに使うベースカラー
        theme: {
          light: "#F2F2F2",
          medium: "#EFEFEF",
          DEFAULT: "#000000",
          dark: "#4E4E4E",
        },
        // メインカラー
        primary: {
          light: "#EAEDEE",
          medium: "#C5DEE3",
          DEFAULT: "#3E92A3",
          // dark: '',
        },
        // サブカラー
        secondary: {
          // light: '',
          // medium: '',
          DEFAULT: "#FFF29E",
          // dark: '',
        },
        // アクセントカラー
        accent: {
          // light: '',
          // medium: '',
          DEFAULT: "#C42162",
          // dark: '',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
