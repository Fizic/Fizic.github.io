export default function Section({ id, eyebrow, title, intro, tone = 'plain', children }) {
  const className = tone === 'plain' ? 'section' : `section section--${tone}`;

  return (
    <section id={id} className={className}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="section-heading">
            {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-heading__title">{title}</h2>}
            {intro && <p className="section-heading__intro">{intro}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
