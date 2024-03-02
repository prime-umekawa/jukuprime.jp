# 素材ヘブン LP

素材ヘブンの LP

## 環境

`package.json` を参照ください。

## 使用しているパッケージ

### [`date-fns`](https://date-fns.org/)

日付のフォーマットに使用しています。

### [`husky`](https://typicode.github.io/husky/#/)

`husky` は、git でコミットする直前に登録したコマンドを実行してくれるツールです。コミット前に Prettier と ESLint を走らせるようにしています。
（カスタマイズするとプッシュ前にコマンドを走らせることもできる）

あわせて [`lint-staged`](https://github.com/okonet/lint-staged) も使用していて、こちらは stage に上がっているファイルに対して Lint をかけてくれるツールです。

### [`next-head-seo`](https://github.com/catnose99/next-head-seo)

catnose さんが作成した SEO カスタマイズ系の軽量パッケージです。`Layout` コンポーネントで使用しています。

### [`react-hook-form`](https://react-hook-form.com/jp/)

フォームのバリデーションライブラリです。

エラーメッセージの表示用に `@hookform/error-message` も使用しています。

### [`react-icons` ](https://react-icons.github.io/react-icons/)

アイコンの表示に使用しています。

### [`recoil`](https://recoiljs.org/)

グローバルな状態管理で使用しています。

### [`tailwindcss`](https://tailwindcss.com/)

プロジェクトのスタイリングは Tailwind CSS を使用しています。`postcss` と `autoprefixer` も一緒に使用しています。
