import { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'


interface RootState {
    auth: {
        isAuthenticated: boolean
    }
}

interface OwnProps {
    element: JSX.Element
    path: string
}

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = OwnProps & PropsFromRedux

const PrivateRoute: FunctionComponent<Props> = ({
    isAuthenticated,
    element,
    path,
}) => {
    return isAuthenticated ? element : <Navigate to={path} />
}

export default connector(PrivateRoute)
