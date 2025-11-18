import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login/login_form";
import RegisterForm from "./pages/register/register_form";
import LayoutMain from "./components/layout/layout_main";
import MenuPage from "./pages/menu/menu_page";
import OrdersPage from "./pages/orders/orders_page";
import { CartProvider } from "./context/cart_context";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
