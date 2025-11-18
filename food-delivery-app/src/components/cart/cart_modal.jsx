import React from "react";
import { useCart } from "../../context/cart_context";

const CartModal = () => {
  const { items, total, isOpen, closeCart, removeItem, clear } = useCart();

  if (!isOpen) return null;

  const handleOverlayClick = () => closeCart();
  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 sm:p-8"
    >
      <div
        onClick={stop}
        className="relative w-full max-w-5xl bg-neutral-900 text-gray-100 rounded-xl shadow-xl border border-neutral-700"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-700">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button
            onClick={closeCart}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-500/90 text-white hover:bg-red-600"
            aria-label="Close"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-300">
                <th className="w-10 font-semibold">#</th>
                <th className="font-semibold">Name</th>
                <th className="font-semibold">Quantity</th>
                <th className="font-semibold">Option</th>
                <th className="font-semibold">Amount</th>
                <th className="w-10" />
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                items.map((it, idx) => (
                  <tr key={it.key} className="border-t border-neutral-800">
                    <td className="py-3 pr-3 text-gray-300">{idx + 1}</td>
                    <td className="py-3 pr-3">{it.title}</td>
                    <td className="py-3 pr-3">{it.qty}</td>
                    <td className="py-3 pr-3">{it.size}</td>
                    <td className="py-3 pr-3">{it.qty * it.unitPrice}</td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => removeItem(it.key)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-800"
                        title="Remove"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Total */}
          <div className="mt-6 text-2xl font-semibold">
            Total Price: {total}/-
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center gap-3">
            <button
              disabled={items.length === 0}
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Check Out
            </button>
            <button
              type="button"
              onClick={clear}
              disabled={items.length === 0}
              className="inline-flex items-center justify-center rounded-md bg-neutral-700 px-3 py-2 text-sm hover:bg-neutral-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
