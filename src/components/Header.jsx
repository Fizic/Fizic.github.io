import { NavLink } from 'react-router';

const navigation = [
  { to: '/', label: 'Главная', end: true },
  { to: '/works', label: 'Работы' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <nav className="site-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
