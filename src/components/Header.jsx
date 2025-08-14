function Header({title, children}) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-600 to-cyan-400 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide m-0">{title}</h1>
          <p className="text-white/90 text-sm m-0">{children}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;