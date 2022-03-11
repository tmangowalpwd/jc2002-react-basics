import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import TodoPage from './pages/todo';
import BandPage from "./pages/band";
import Navbar from "./components/Navbar/Navbar";
import TourPage from "./pages/tour";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/404";
import HalamanBandMember from "./pages/band-member";
import ProductPage from "./pages/products";
import UsersPage from "./pages/users";
import LoginPage from "./pages/login";
import CounterPage from "./pages/counter";
import user_types from "./redux/reducers/types/user"
import ProtectedPage from "./components/ProtectedPage"
import ProfilePage from "./pages/profile"
import MyProfilePage from "./pages/my-profile"

function App() {
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    // user udah pernah login atau belom?
    const savedUserData = localStorage.getItem("user_data")

    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData)

      dispatch({
        type: user_types.LOGIN_USER,
        payload: parsedUserData
      })
    }

    setIsAuthChecked(true);
  }, [])

  if (!isAuthChecked) {
    return <div>Loading ...</div>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/band" element={<BandPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/band-member/:bandMemberId" element={<HalamanBandMember />} />
        <Route path="/products" element={
          <ProtectedPage allowedRoles={["admin"]} >
            <ProductPage />
          </ProtectedPage>
        } />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={
          <ProtectedPage guestsOnly>
            <LoginPage />
          </ProtectedPage>
        } />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
