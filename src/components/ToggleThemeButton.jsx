import { useTheme } from "../context/theme-context";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-4 py-2 rounded-lg bg-slate-800 text-white"
    >
      Toggle Theme {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ToggleThemeButton;