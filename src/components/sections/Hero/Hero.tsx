import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__name">MIU MIURA</h1>
      <p className="hero__sub">PORTFOLIO</p>
      <p className="hero__desc">
        React / TypeScriptを用いたWeb開発を行っています。<br />
        LP制作やAPI連携、フォーム実装など、実務を意識した開発が可能です。
      </p>
    </section>
  );
};

export default Hero;