import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <>
        <button className="border-2 border-teal-500 hover:bg-teal-400 w-full p-3 flex justify-between rounded-xl"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p>${item.price}</p>
        </button>
    </>
    )
}
