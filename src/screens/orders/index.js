import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import ProductoOrder from '../../components/producto-order/index';
import { getOrders, deleteOrder } from '../../store/actions/order.action.js';
import { useSelector, useDispatch } from 'react-redux';

const Orders = () => {
    const dispatch = useDispatch();    
    const items = useSelector(state => state.orders.orders);

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    }

    const renderItems = (data) => (
        <ProductoOrder item={data.item} onDelete={handleDeleteOrder} />
    )

    useEffect(() => {
        dispatch(getOrders());
    },[])
    
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
};

export default Orders;