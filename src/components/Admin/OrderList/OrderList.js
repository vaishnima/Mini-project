import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrderList.css';
const OrderList = () => {
    const OrderList = [
        {
            id: 1,
            customerName: 'asha',
            totalPrice:100,
        },
        {
            id: 2,
            customerName: 'jahana',
            totalPrice:50,
        },
        {
            id: 3,
            customerName: 'vishnu',
            totalPrice:180,
        }
    ];
    const handleViewDetails = (order) => {
        toast.info(`Viewing details of order ${order.id}`);

    };
    const handleMarkAsShipped = (order) => {
        toast.success(`Making order ${order.id} as shipped`);
    };


  return (
    <div className='admin-order-page'>
        <h2 className='orders-head'>Orders</h2>
        <table className='order-table'>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>customer Name</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                    <th>Status</th></tr></thead>
                    <tbody>
                        {OrderList.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button className='view-details-button' onClick={() => handleViewDetails(order)}>View Details</button>
                                    <button className='mark-as-shipped-button' onClick={() => handleMarkAsShipped(order)}>View Details</button>
                                    
                                </td>
                            </tr>
                        ))}
                            </tbody></table></div>
    
  )
}

export default OrderList