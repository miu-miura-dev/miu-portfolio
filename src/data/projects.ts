export type Project = {
  images: string[] // 画像のURL
  title: string // プロジェクトのタイトル
  description: string // プロジェクトの説明
  tech: string[]  // 使用技術のリスト
  ingenuity: string[] // 工夫した点の説明
  demoUrl: string // デモURL
  githubUrl: string // GitHubリポジトリURL
}

export const projects: Project[] = [
  {
  images: ["/images/works/portfolio.png"],
  title: "Portfolio Site",
  description: "自身のポートフォリオサイトをReact / TypeScriptで制作。作品紹介・詳細ページ遷移など、実務を想定した構成で設計。",
  tech: ["React", "TypeScript", "CSS"],
  ingenuity: [
    "作品一覧 → 詳細ページの遷移設計",
    "レスポンシブ対応（PC/SP）",
    "コンポーネント分割による保守性向上",
    "ユーザーが見やすいUI設計",
    "デプロイ（Vercel）対応"
  ],
  demoUrl: "https://miu-portfolio.vercel.app/",
  githubUrl: "https://github.com/miu-miura-dev/miu-portfoliohttps://github.com/miu-miura-dev/miu-portfolio",
},
{
  images: ["/images/works/lp-html.png", "/images/works/lp-html.png"],
  title: "Landing Page (HTML/CSS)",
  description: "Figmaデザインを元に、HTML / CSSでLPをコーディング。レスポンシブ対応・ハンバーガーメニュー・フォーム実装まで一貫して対応。",
  tech: ["HTML", "CSS", "JavaScript"],
  ingenuity: [
    "レスポンシブ対応（PC/SP）",
    "ハンバーガーメニュー実装",
    "フォーム実装（バリデーション対応）",
    "Figmaデザインの忠実な再現",
    "ユーザーが見やすいレイアウト調整"
  ],
  demoUrl: "https://seminar-lp-ten.vercel.app/",
  githubUrl: "https://github.com/miu-miura-dev/seminar-lp" 
},
{
  images: ["/images/works/lp-react.png", "/images/works/lp-react.png"],
  title: "Landing Page (React)",
  description: "React / TypeScriptでLPを構築。コンポーネント設計を意識し、レスポンシブ対応・フォーム実装・アニメーションまで一貫して対応。",
  tech: ["React", "TypeScript", "CSS"],
  ingenuity: [
    "コンポーネント分割による再利用性の高い設計",
    "useState / useEffectを用いた状態管理",
    "レスポンシブ対応（PC/SP）",
    "ハンバーガーメニュー実装",
    "フォーム実装（バリデーション対応）",
    "アニメーション実装"
  ],
  demoUrl: "https://corporate-lp-smarthr.vercel.app/",
  githubUrl: "https://github.com/miu-miura-dev/corporate-lp-smarthr",
},
{
  images: ["/images/works/lp-wp.png"],
  title: "Landing Page (WordPress)",
  description: "WordPressテーマ化を前提としたLPを現在制作中。管理画面から更新可能な設計を意識して実装予定。",
  tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  ingenuity: [
    "テーマ化を前提とした構造設計",
    "カスタム投稿・カスタムフィールド対応予定",
    "管理画面から更新可能なUI設計",
  ],
  demoUrl: "#",
  githubUrl: "#",
},
  {
    images: ["/images/works/user-directory.png", "/images/works/user-directory.png"],
    title: "User Directory",
    description: "API連携ユーザー一覧アプリ",
    tech: ["React", "TypeScript", "CSS"],
    ingenuity: ["APIからのデータ取得", "効率的な表示", "ユーザー検索機能"],
    demoUrl: "https://react-user-directory.vercel.app/",
    githubUrl: "https://github.com/miu-miura-dev/react-user-directory",
  },
  {
    images: ["/images/works/contact-form.png", "/images/works/contact-form.png"],
    title: "Contact Form",
    description: "react-hook-formで作成したフォーム",
    tech: ["React", "TypeScript", "CSS"],
    ingenuity: ["バリデーション強化", "ユーザーエクスペリエンス向上", "エラーハンドリング"],
    demoUrl: "https://contact-form-app-gamma.vercel.app/",
    githubUrl: "https://github.com/miu-miura-dev/contact-form-app",
  },
]