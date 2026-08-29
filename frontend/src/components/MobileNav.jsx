import { NavLink } from 'react-router-dom';
import { navItems } from './Sidebar';

function MobileNav() {
  const items = navItems.slice(0, 5);

  return (
    <nav className="admin-mobile-nav">
      {items.map(({ href, label, icon: Icon }) => (
        <NavLink
          key={label}
          to={href}
          className={({ isActive }) => `admin-mobile-nav-link ${isActive ? 'active' : ''}`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileNav;
