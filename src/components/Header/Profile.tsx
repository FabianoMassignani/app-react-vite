import { UserOutlined } from '@ant-design/icons'
import { logout } from '../../actions/Auth.thunks'
import { connect, ConnectedProps } from 'react-redux'

interface Props extends ConnectedProps<typeof connector> {}

const _Profile = (props: Props) => {
    const { isAuthenticated } = props

    const authLinks = (
        <div className="header-profile">
            <UserOutlined style={{ fontSize: '24px' }} />
        </div>
    )

    return <>{isAuthenticated ? authLinks : null}</>
}

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user as IUser,
})

const mapDispatchToProps = {
    logout,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const Profile = connector(_Profile)

export { Profile }
