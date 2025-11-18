import React from "react";
import ordersByDate from "../../data/orders";

const OrderItemCard = ({ item }) => {
  return (
    <div className="flex max-w-md bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-sm">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-32 h-28 object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="flex-1 p-3">
        <h4 className="text-white font-semibold leading-snug">{item.title}</h4>
        <div className="mt-1 text-sm text-gray-300 flex items-center gap-3 flex-wrap">
          <span className="font-medium">{item.qty}</span>
          <span className="capitalize">{item.size}</span>
          <span className="text-xs text-gray-400">{item.dateLabel}</span>
        </div>
        <div className="mt-2 text-white font-semibold">₹{item.amount}/-</div>
      </div>
    </div>
  );
};

const OrdersPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {ordersByDate.map((group) => (
        <section key={group.id} className="mb-10">
          <div className="text-sm font-medium text-gray-700">
            {group.dateLabel}
          </div>
          <div className="h-px bg-gray-300 my-3" />

          <div className="space-y-3">
            {group.items.map((item) => (
              <OrderItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      {ordersByDate.length === 0 && (
        <div className="text-center text-gray-500">No orders yet.</div>
      )}

      <div className="mt-8 text-xs text-gray-400">© 2025 GoFood, Inc.</div>
    </div>
  );
};

export default OrdersPage;
