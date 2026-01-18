# Discord Leave Bot

Discordのボイスチャンネル（VC）から  
**指定した時刻** または **指定した分数後** に自動退出する Bot です。

スラッシュコマンド対応（Discord.js v14）。

---

## 機能

- `/leave_after minutes:10`  
  → 指定分後に VC から退出
- `/leave_at time:23:30`  
  → 指定時刻に VC から退出
- `/leave_cancel`  
  → 予約をキャンセル

※ すべて **自分にだけ表示されるメッセージ（ephemeral）**

---

## 動作環境

- Node.js **18以上**
- Discord.js v14
- Windows（exe 配布対応）

---

## セットアップ（Node.js で実行する場合）

### 1. 依存関係をインストール

```bash
npm install

2. .env を作成

プロジェクト直下に .env を作成し、以下を記入：

DISCORD_TOKEN=あなたのBotトークン
CLIENT_ID=あなたのApplicationID

⚠ .env は GitHub に push しないでください

3. スラッシュコマンド登録（初回のみ）
node register.js
成功すると：

コマンド登録完了

4. Bot 起動
node index.js

exe 版の使い方（配布用）
フォルダ構成
DiscordLeaveBot/
├─ run.exe
├─ setup.exe
├─ .env
└─ README.md

手順
1.env を編集
2.初回のみ
setup.exe
3.普段は
run.exe
