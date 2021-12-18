import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./shared/NavigationBar/NavigationBar";
import LatestNews from "./pages/LatestNews/LatestNews";
import SingleNews from "./pages/SingleNews/SingleNews";
import NewsByCatagory from "./pages/NewsByCatagory/NewsByCatagory";
import AddNews from "./pages/Dashboard/AddNews/AddNews";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/latest_news" element={<LatestNews></LatestNews>} />
            <Route path="/latest_news/:id" element={<SingleNews />} />
            <Route path="/category" element={<NewsByCatagory />} />
            <Route
              path="/category/:categoryName"
              element={<NewsByCatagory />}
            />

            <Route path="/login" element={<Login />} />

            <Route path="/add_news" element={<AddNews />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
