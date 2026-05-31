export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">Фирсов Кирилл</p>
          <h2 className="site-footer__title">Учебное портфолио</h2>
        </div>

        <div className="site-footer__meta">
          <div>
            <p className="site-footer__label">Контакт</p>
            <a href="https://t.me/FizicX" target="_blank" rel="noreferrer">
              t.me/FizicX
            </a>
          </div>

          <div>
            <p className="site-footer__label">Вуз</p>
            <p>РГПУ им. А. И. Герцена</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
