export type Project = {
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    title: "Corporate LP",
    description: "Reactで作成したコーポレートLP",
    url: "LPのVercelURL",
  },
  {
    title: "User Directory",
    description: "API連携ユーザー一覧アプリ",
    url: "APIアプリURL",
  },
  {
    title: "Contact Form",
    description: "react-hook-formで作成したフォーム",
    url: "フォームURL",
  },
]