import React, { useCallback } from "react";
import MenuCard from "../../components/menu/menu_card";
import menuData from "../../data/menu";
import { useCart } from "../../context/cart_context";

const MenuPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = useCallback(
    (item, payload) => {
      // Merge id so cart grouping works per item+size
      addItem({ id: `${item.id}_${payload.size}`, ...payload });
    },
    [addItem]
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {menuData.map((category) => (
        <section key={category.id} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {category.title}
          </h2>
          <div className="h-px bg-gray-200 mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <MenuCard
                key={item.id}
                title={item.title}
                image={item.image}
                sizes={item.sizes}
                priceMap={item.priceMap}
                currency={item.currency || "₹"}
                qtyOptions={item.qtyOptions}
                onAddToCart={(payload) => handleAddToCart(item, payload)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuPage;
