import { NavMenu } from './Menu'

export const AppHeader = () => {
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo"></div>

          <div className="navbar-menu">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
