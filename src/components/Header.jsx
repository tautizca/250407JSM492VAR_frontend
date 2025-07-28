import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="./logo.svg" alt="Logo" className="header-logo" />
        <h1>React Modern App</h1>
      </div>
    </header>
  );
}

export default Header;