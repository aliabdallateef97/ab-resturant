import { Route, Routes, Navigate } from "react-router-dom";
import React,{Suspense} from "react";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Auth from "./pages/Auth";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCart } from "./store/cart-actions";
import { useEffect } from "react";
import LoadingSpinner from './components/UI/Spinner/LoadingSpinner'

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const Home=React.lazy(()=>import('./pages/Home'))
  const MealDetail=React.lazy(()=>import('./pages/MealDetail'))
  const Meals=React.lazy(()=>import('./pages/Meals'))
  const Orders=React.lazy(()=>import('./pages/Orders'))

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {isLoggedIn && (
          <React.Fragment>
            <Route path="/home" element={<Home />} />
            <Route path="/meal-item/:id" element={<MealDetail />} />
            <Route path="/meal-items/*" element={<Meals />} />
            <Route path="/orders" element={<Orders />}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </React.Fragment>
        )}
        {!isLoggedIn && (
          <React.Fragment>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </React.Fragment>
        )}
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
