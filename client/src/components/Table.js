import React from 'react'



const Table = ({ headersList, rowsList }) => {


    const subTotal = (orderItems) => orderItems.reduce((accumulater, current) => accumulater + current.prices[0][current.selectedVarient] * current.selectedQuanity, 0)
    const toDate = (timeStamp) => {
        const date = new Date(timeStamp);

        return (date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds())
    }
    const orderDetails = (orderItems) => {
        return (
            <div className="order_details-box">
                {
                    orderItems.map(order => {
                        return (
                            <p style={{ fontSize: "12px" }}>
                                {order.name} * {order.selectedQuanity} {order.selectedVarient}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className="table">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        {headersList.map(header => <th scope="col">{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rowsList.map((order, index) => {
                        return (<tr className="table-Active">
                            <th scope="row">{index + 1}</th>
                            <td >
                                {orderDetails(order.orderItems)}
                            </td>
                            <td>{order._id.substring((order._id).length - 6, (order._id).length)}</td>
                            <td>{toDate(order.createdAt)}</td>
                            <td style={{ backgroundColor: "red" }}>{order.isDelivered ? "delivered" : "processing order"}</td>

                            <td>{subTotal(order.orderItems)}</td>
                        </tr>)
                    })}

                </tbody>
            </table>


        </div>
    )
}

export default Table;