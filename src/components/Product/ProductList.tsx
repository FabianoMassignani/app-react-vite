import { Table } from 'antd'
import { connect, ConnectedProps } from 'react-redux'

interface Props extends ConnectedProps<typeof connector> { }

const _ProductList = (props: Props) => {
    const { Loading } = props

    return (
        <div className="container">
            <Table
                loading={Loading}
                dataSource={[]}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: 'Price',
                        dataIndex: 'price',
                        key: 'price',
                    },

                ]}
            />
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    Loading: state.auth.loading,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

const ProductList = connector(_ProductList)

export { ProductList }
