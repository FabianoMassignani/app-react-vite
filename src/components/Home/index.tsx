import { connect, ConnectedProps } from 'react-redux'
import { Login } from '../Auth/Login'
import { ProductList } from '../Product/ProductList'

interface Props extends ConnectedProps<typeof connector> { }

const _Home = (props: Props) => {
    const { isAuthenticated } = props

    return <>{!isAuthenticated ? <Login /> : <ProductList />}</>
}

const mapStateToProps = (state: AppState) => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

const Home = connector(_Home)

export { Home }
