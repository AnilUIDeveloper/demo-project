import { Outlet } from "react-router-dom";
import HeaderMain from "./header_main.jsx";
import FooterMain from "./footer_main.jsx";
import CartModal from "../cart/cart_modal.jsx";

const LayoutMain = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <HeaderMain />
      <main className="flex-1 min-h-0 overflow-y-auto p-4">
        <Outlet />
      </main>
      <FooterMain />
      <CartModal />
    </div>
  );
};

export default LayoutMain;
