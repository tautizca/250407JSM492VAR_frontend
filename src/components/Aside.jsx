import './Aside.css';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

function Aside() {
  return (
    <aside className="aside">
      <nav>
        <ul>
          {navItems.map((item, idx) => (
            <li key={idx} className="aside-nav-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
