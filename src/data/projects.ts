export type Project = {
  image: string // 画像のURL
  title: string // プロジェクトのタイトル
  description: string // プロジェクトの説明
  tech: string[]  // 使用技術のリスト
  ingenuity: string[] // 工夫した点の説明
  demoUrl: string // デモURL
  githubUrl: string // GitHubリポジトリURL
}

export const projects: Project[] = [
  {
    image: "/images/works/corporate-lp.png",
    title: "Corporate LP",
    description: "企業向けLPをReactで制作",
    tech: ["React", "TypeScript", "CSS"],
    ingenuity: ["レスポンシブ対応", "フォーム実装", "アニメーション"],
    demoUrl: "https://corporate-lp-smarthr.vercel.app/",
    githubUrl: "https://github.com/miu-miura-dev/corporate-lp-smarthr",
  },
  {
    image: "/images/works/user-directory.png",
    title: "User Directory",
    description: "API連携ユーザー一覧アプリ",
    tech: ["React", "TypeScript", "CSS"],
    ingenuity: ["APIからのデータ取得", "効率的な表示", "ユーザー検索機能"],
    demoUrl: "https://react-user-directory.vercel.app/",
    githubUrl: "https://github.com/miu-miura-dev/react-user-directory",
  },
  {
    image: "/images/works/contact-form.png",
    title: "Contact Form",
    description: "react-hook-formで作成したフォーム",
    tech: ["React", "TypeScript", "CSS"],
    ingenuity: ["バリデーション強化", "ユーザーエクスペリエンス向上", "エラーハンドリング"],
    demoUrl: "https://contact-form-app-gamma.vercel.app/",
    githubUrl: "https://github.com/miu-miura-dev/contact-form-app",
  },
]