import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./shared/NavigationBar/NavigationBar";
import LatestNews from "./pages/LatestNews/LatestNews";
import AddNews from "./pages/AddNews/AddNews";
import SingleNews from "./pages/SingleNews/SingleNews";
import GameNews from "./pages/GameNews/GameNews";
import NewsByCatagory from "./pages/NewsByCatagory/NewsByCatagory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/latest_news" element={<LatestNews></LatestNews>} />
          <Route path="/latest_news/:id" element={<SingleNews />} />
          <Route path="/sports" element={<GameNews />} />
          <Route path="/category" element={<NewsByCatagory />} />
          <Route path="/category/:categoryName" element={<NewsByCatagory />} />
          <Route path="/add_news" element={<AddNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
