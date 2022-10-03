function Header() {
  return (
  <nav className="brown darken-3">
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo disabled">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Sass</a></li>
        <li><a href="/">Components</a></li>
        <li><a href="/">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export {Header}
