import './Header.css';

function Header({title, children}) {
  return (
    <header className="header">
      <div className="header-content">
        <img src="./logo.svg" alt="Logo" className="header-logo" />
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </header>
  );
}

export default Header;