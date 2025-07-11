import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Gaming from "./components/Gaming";
import Saved from "./components/Saved";
import Trending from "./components/Trending";
import "./App.css";
import ViewItemDetails from "./components/ViewItemDetails";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/trending" element={<Trending />} />
    <Route path="/gaming" element={<Gaming />} />
    <Route path="/savedVideos" element={<Saved />} />
    <Route path="/viewItemDetails/:id" element={<ViewItemDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
