import { useMemo } from "react"
import { OrderItem } from "../types"
import formarCurrency from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    guardarOrden: () => void
}

export default function OrderTotals({order, tip, guardarOrden} : OrderTotalsProps) {

    const subtotalAmount = useMemo( () => (
        order.reduce((total, item) => total + (item.quantity * item.price), 0)
    ), [order] )

    const tipAmount = useMemo( () => subtotalAmount * tip, [tip, order])

    const totalPagar = useMemo(() => subtotalAmount + tipAmount, [tip, order] )

    return (
    <>
        <h2 className="text-2xl font-black">Totales y Propina</h2>

        <p>Subtotal a pagar: <span className="font-bold">{formarCurrency(subtotalAmount)}</span></p>
        <p>Propina: <span className="font-bold">{formarCurrency(tipAmount)}</span></p>
        <p>Total a pagar: <span className="font-bold">{formarCurrency(totalPagar)}</span></p>

        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalPagar === 0}
            onClick={guardarOrden}
        >
            Guardar Orden
        </button>
    </>
  )
}
