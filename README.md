# Discord Leave Bot

## 概要
Discordのボイスチャットで指定した時間になったら自動で抜けるBotです。

- `/leave_at [HH:MM]` : 指定した時間にVCから自動で退出
- `/leave_cancel` : 予約をキャンセル

Windows用のexeで簡単に起動できます。

---

## ダウンロード

最新の配布ファイルは **Releases** からダウンロードしてください：

[Releasesページ](https://github.com/kiryu-prog/discord-leave-bot/releases)

- ファイル: `discord-leave-bot.exe`

---

## 使い方

1. **exe をダウンロード**  
2. 初回起動時に **Bot Token** を入力（Discord Developer Portal で取得）  
   - Token は絶対に他人に教えないでください  
3. 起動後、Discordで `/leave_at` `/leave_cancel` が使用可能  
4. BotがVCを抜けるまで exe ウィンドウは閉じないでください

---

## 注意事項

- Windows Defender などで警告が出る場合がありますが、自作Botのexeでは問題ありません  
- Discordサーバーに招待するときは、**Connect** と **Move Members** の権限が必要です  
- `config.json` は GitHub には含めていません  
  - Token はローカルでのみ保持されます  

---

## 開発用

- ソースコードはこのリポジトリにあります  
- コマンドを追加する場合は `commands/` に `.js` ファイルを作成  
- ビルド: `npm run build` → exe生成（pkg使用）

---

## ライセンス

MIT License
