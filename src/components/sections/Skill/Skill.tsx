import "./Skill.css";

const skills = [
  {
    icon: "/images/icon/react.png",
    title: "React",
    text: "コンポーネント設計を意識した開発が可能。API連携・フォーム実装など実務を想定した実装経験あり。",
  },
  {
    icon: "/images/icon/typescript.png",
    title: "TypeScript",
    text: "型安全を意識した開発が可能。propsや配列・オブジェクトの型定義を用いた実装経験あり。",
  },
  {
    icon: "/images/icon/html_css.png",
    title: "HTML / CSS",
    text: "レスポンシブ対応・レイアウト設計が可能。Flexbox・Gridを用いた実装経験あり。",
  },
  {
    icon: "/images/icon/api.png",
    title: "API Integration",
    text: "外部APIからのデータ取得・表示処理の実装経験あり。ローディング・エラーハンドリング対応可能。",
  },
  {
    icon: "/images/icon/form.png",
    title: "Form Handling",
    text: "react-hook-formを用いたフォーム実装。バリデーション・UXを意識した設計が可能。",
  },
  {
    icon: "/images/icon/git.png",
    title: "Git / GitHub",
    text: "バージョン管理・コード管理が可能。GitHubを用いたポートフォリオ公開経験あり。",
  },
];

const Skill = () => {
  return (
   <section id="skill" className="skill">
      <h2 className="skill__title">SKILL</h2>

      <div className="skill__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill__item">
            <div className="skill__icon">
              <img src={skill.icon} alt={skill.title} />
            </div>

            <div>
              <h3 className="skill__name">{skill.title}</h3>
              <p className="skill__text">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;