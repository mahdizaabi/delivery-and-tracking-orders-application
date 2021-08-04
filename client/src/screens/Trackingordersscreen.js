import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction';
import Table from '../components/Table'


const TrackingOrdersScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])

    const { error, loading, orders } = useSelector(state => state.getAllOrdersReducer);

    console.log(orders)

    return (
        <div className="container" >
            <h1 style={{ fontSize: "35px" }}>Orders tracker</h1>
            <Table
                headersList={["#", "order details", "order id", "date", "order status", "total amount"]}
                rowsList={orders}
            ></Table>
        </div>
    )
}

export default TrackingOrdersScreen;