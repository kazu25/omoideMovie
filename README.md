# おもいでムービー β版

家族の動画をアップロードするだけで、AIがシーンを自動抽出・1分動画を生成・歌詞を作成するWebサービスです。

## 機能
- 複数動画（最大20本）のアップロード
- Gemini AIによるシーン自動採点・抽出
- ディゾルブつなぎで1分動画を自動生成
- 歌詞の自動生成（SUNO向け）
- BGMとの合成・ダウンロード

## Vercelへのデプロイ手順

### 1. このフォルダをGitHubにアップロード

GitHubアカウントで新しいリポジトリを作成し、
このフォルダの中身をアップロードしてください。

### 2. Vercelと連携

1. https://vercel.com にアクセス
2. 「Add New Project」をクリック
3. GitHubのリポジトリを選択
4. 「Deploy」をクリック

**設定は変更不要です。** vercel.jsonが自動的に読み込まれます。

### 3. 完了

デプロイ完了後、`あなたのプロジェクト名.vercel.app` のURLが発行されます。
そのURLを友人・家族に送ればすぐ使えます。

## 必要なもの（ユーザー側）

- Gemini APIキー（Google AI Studioで無料取得）
- SUNOアカウント（BGM生成用・無料プランあり）
- PCのChrome推奨（動画処理のため）

## 技術スタック

- フロントエンド: Vanilla HTML/CSS/JS（サーバー不要）
- AI分析: Gemini 1.5 Flash / Pro API
- 動画合成: Web API（Canvas + MediaRecorder）
- ホスティング: Vercel（無料）
