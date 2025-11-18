import React, { useMemo, useState } from "react";

/**
 * MenuCard - reusable food item card
 * Props:
 * - title: string
 * - image: string (URL)
 * - sizes: array of size keys (e.g. ['half','full']) OR array of { key, label }
 * - priceMap: object mapping size key -> unit price number
 * - qtyOptions: array of numbers (default [1..5])
 * - currency: string (default '₹')
 * - onAddToCart: function(payload)
 * - className: string (optional)
 */
const normalizeSizes = (sizes) =>
  (sizes || []).map((s) => (typeof s === "string" ? { key: s, label: s } : s));

const MenuCard = ({
  title,
  image,
  sizes = ["half", "full"],
  priceMap = { half: 120, full: 200 },
  qtyOptions,
  currency = "₹",
  onAddToCart,
  className = "",
}) => {
  const sizeList = useMemo(() => normalizeSizes(sizes), [sizes]);
  const defaultSizeKey = sizeList[0]?.key;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(defaultSizeKey);

  const qtyList =
    qtyOptions && qtyOptions.length ? qtyOptions : [1, 2, 3, 4, 5];

  const unitPrice = priceMap?.[size] ?? 0;
  const total = unitPrice * qty;

  const handleAdd = () => {
    const payload = { title, image, qty, size, unitPrice, total };
    if (typeof onAddToCart === "function") onAddToCart(payload);
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden ${className}`}
    >
      {image ? (
        <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <select
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {qtyList.map((q) => (
              <option key={q} value={q}>
                {q} v
              </option>
            ))}
          </select>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sizeList.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>

          <div className="ml-auto text-sm font-medium text-gray-900">
            {currency}
            {total}/-
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
