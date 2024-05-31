import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect, ConnectedProps } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../actions/Auth.thunks'
import { PATH } from '../../constants/paths'

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    Loading: state.auth.Loading,
})

const mapDispatchToProps = {
    login,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
interface Props extends ConnectedProps<typeof connector> { }

const _Login = (props: Props) => {
    const navigate = useNavigate()
    const { login, isAuthenticated, Loading } = props

    const onFinish = (values: any) => {
        login(values)
    }

    if (isAuthenticated) {
        navigate(PATH.PERFIL)
    }

    return (
        <div className="container">
            <div className="login-form">
                <Form
                    name="login_form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira seu email!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira sua senha!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Lembrar-me</Checkbox>
                        </Form.Item>

                        <div className="login-form-register-link">
                            <Link to={PATH.REGISTER}>Cadastrar</Link>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={Loading}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

const Login = connector(_Login)

export { Login }
