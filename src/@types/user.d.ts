interface ReqLogin {
    email: string
    password: string
}

interface ReqRegister {
    email: string
    password: string
    name: string
}

interface ResLoginApi extends Res {
    data: {
        id: string
        name: string
        email: string
        password: string
    }
}

interface IUser {
    id: string
    name: string
    email: string
    password: string
    accessToken: string
}

interface DispatchAuth {
    type: string
    payload?: any
}

type CreateUserDto = Omit<IUser, 'id'>

type UpdateUserDto = Partial<IUser>
