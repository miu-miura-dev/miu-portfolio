import "./About.css";

export const About = () => {
  return (
 <section id="about" className="about">
      <h2 className="about__title">ABOUT</h2>

      <div className="about__container">
        <div className="about__image">
          <img src="/images/profile/icon.png" alt="Profile" />
        </div>

        <div className="about__content">
          <p>
            React / TypeScriptを用いたWeb開発を行っています。
          </p>
          <p>
            LP制作やAPI連携、フォーム実装など、実務を意識した開発が可能です。<br />
            ユーザーにとって分かりやすく使いやすいUIを意識しながら、
            シンプルで保守しやすいコードを書くことを大切にしています。
          </p>
          <p>
            現在も継続して技術学習を行い、より実践的なスキルの習得に取り組んでいます。
          </p>
        </div>
      </div>
    </section>
  );
};