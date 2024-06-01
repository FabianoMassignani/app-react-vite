import { NavMenu } from './Menu'

export const AppHeader = () => {
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <h2>Logo</h2>
            </a>
          </div>
          <div className="navbar-menu">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
