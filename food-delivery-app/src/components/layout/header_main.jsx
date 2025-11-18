import { Link } from "react-router-dom";
import { useCart } from "../../context/cart_context";

const HeaderMain = () => {
  const { count, openCart } = useCart();
  return (
    <header className="flex-none h-[100px] flex items-center justify-center bg-gray-100 border-b border-gray-200 px-24">
      <div className="flex items-center justify-between w-full">
        <div>Logo</div>
        <div className="flex items-center gap-4">
          <Link to="/menu">Menu</Link>
          <Link to="/orders">My Orders</Link>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-gray-50"
          >
            Cart
            {count > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs text-white">
                {count}
              </span>
            )}
          </button>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
