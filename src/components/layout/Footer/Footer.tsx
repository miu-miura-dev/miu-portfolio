import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Miu Miura. All rights reserved.
      </p>
    </footer>
  );
};