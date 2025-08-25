import Text from './Text';
import ToggleThemeButton from './ToggleThemeButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

function Aside({counterNumber}) {
  return (
    <aside className="md:sticky md:top-[72px] md:self-start md:h-[calc(100vh-72px)] w-full md:w-60 shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 p-4">
      <nav>
        <ToggleThemeButton />
        <ul className="flex md:flex-col gap-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="block px-4 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 transition"
              >
                <Text name={item.label} counteris={counterNumber} />  
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
