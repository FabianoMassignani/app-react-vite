import { connect, ConnectedProps } from 'react-redux'

import { Login } from '../Auth/Login'

const mapStateToProps = (state: AppState) => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
interface Props extends ConnectedProps<typeof connector> { }

const _Home = (props: Props) => {
    const { loading, isAuthenticated } = props

    return <>{!loading && isAuthenticated ? <Login /> : <Login />}</>
}

const Home = connector(_Home)
export { Home }
