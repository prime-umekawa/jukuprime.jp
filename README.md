開発に参加するまでの流れ
以下の手順を踏んで開発に参加しましょう。

1. git clone
   以下のコマンドを実行してクローンします。

```
git clone git@github.com:UnReacts/unreact.jp.git
```

1. npm install
   npm install を行います。npm のバージョンは Volta で固定していますが、Volta を使っていない人は、npm -v で 8 系かどうかを確かめます。

```
#npm のバージョンを確認（8 系でない場合は、7 系をインストール）
npm -v

パッケージをインストール
npm install
```

1. husky の設定
   以下の 2 つのコマンドを実行して husky の実行ファイルに権限を与えてください。

```
chmod a+x .husky/pre-push

chmod a+x .husky/pre-commit
```

1. .env.local の作成
Slack に通知を飛ばすために、.env.local を作成し環境変数を設定します。
また、MICROCMS_API_KEY という値で、microCMS の API Key を渡します。

誰かから貰いましょう。

```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/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
MAIL_RECEIVER=info@unreact.jp
MAIL_SENDER=info@unreact.jp
MAIL_PASS=xcndszbiwzcpfnvm
MICROCMS_API_KEY=nFG1bMaHzSh9w9113egEvwvwnMdPsv84kOZR
```

1. npm run dev
   npm run dev でローカルサーバーを立ち上げます。

```
npm run dev
```


1. ブログを書く時は以下のチェック項目をよく確認してからコミットしましょう
- 文面
  - [ ] サムネ画像が正しく設定されているかどうか
  - [ ] 目次と内容が一致しているか
  - [ ] #の構造
  - [ ] 「## 目次」を必ず追加する
  - [ ] 不要な文字を消す
  - [ ] 誤字脱字・文法表現が無いか
  - [ ] 縦長画像は無いか
  - [ ] 赤枠は統一されているか
  - [ ] リンクはすべて正しいか
  - [ ] 紹介アプリ名は正しいか
  - [ ] インデントは揃っているか

- VS Code
  - [ ] npm run dev して正常に動くか
  - [ ] プルリクメッセージを正しく書く
  - [ ] コミットメッセージを正しく書く

- [ ] Slackで確認依頼を送信する

