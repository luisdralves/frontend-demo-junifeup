import './styles.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/feed',
    label: 'Feed',
  },
  {
    href: '/share',
    label: 'Share',
  },
];

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header>
      <span>Fake Twitter™️</span>
      <ul className="header-links">
        {routes.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={currentPath === href ? 'header-link-active' : ''}
              to={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
