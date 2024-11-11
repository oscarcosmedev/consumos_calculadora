import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  // Extraemos funciones declaradas en useOrder
  const { order, addItem, removeItem, tip, setTip, guardarOrden } = useOrder()

  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl text-center">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 flex flex-col md:flex-row">
        <div className=" w-1/3">
          <h2 className=" text-4xl font-bold">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>
        <div className="w-2/3 border border-dashed border-purple-400 rounded-lg space-y-10 p-5 ms-5">
        {
          order.length ? (
            <>
              <OrderContents 
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals 
                order={order}
                tip={tip}
                guardarOrden={guardarOrden}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacio</p> 
          )
        }
        </div>
      </main>
    </>
  )
}

export default App
