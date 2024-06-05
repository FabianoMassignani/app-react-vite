import { NavMenu } from './Menu'
import { Profile } from './Profile'

export const AppHeader = () => {
    return (
        <div className="navbar-section">
            <div className="container">
                <div className="navbar">
                    <a href="/" className="navbar-item">
                        <h1>Logo</h1>
                    </a>
                    <div className="navbar-item">
                        <div className="navbar-pefil">
                            <Profile />
                        </div>
                        <div className="navbar-menu">
                            <NavMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
