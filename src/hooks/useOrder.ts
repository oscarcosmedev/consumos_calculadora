import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0) // <-- useState para propinas

    const addItem = (item: MenuItem) => {

        const itemExist = order.find( (itemEncontrado) => itemEncontrado.id === item.id)
         if (itemExist) {

            const updateOrder = order.map( (itemEncontrado) => itemEncontrado.id === item.id ? 
            { ...itemEncontrado, quantity: itemEncontrado.quantity + 1 } :  
            itemEncontrado )

            setOrder(updateOrder)

         } else {

            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])

         }


    }

    // console.log(order)

    const removeItem = (item: MenuItem['id']) => {
        // console.log('Eliminando ...', item)
        const updateOrder = order.filter( orden => orden.id !== item)
        setOrder(updateOrder)
    }

    const guardarOrden = () => {
        console.log('guardar orden ...')
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        guardarOrden
    }

}
