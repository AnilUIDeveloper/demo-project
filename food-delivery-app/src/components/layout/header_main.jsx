import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart_context";
import { useState } from "react";
import { useAuth } from "../../context/auth_context";

const HeaderMain = () => {
  const { count, openCart } = useCart();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <>
      <header className="flex-none h-[100px] flex items-center justify-center bg-gray-100 border-b border-gray-200 px-24">
        <div className="flex items-center justify-between w-full">
          <div>Logo</div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
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
                <button
                  type="button"
                  onClick={() => setShowLogoutModal(true)}
                  className="relative inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-gray-50"
                >
                  Logout
                </button>{" "}
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowLogoutModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Confirm Logout
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMain;
