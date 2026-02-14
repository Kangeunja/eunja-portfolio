import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/home/Home";
import Layout from "./components/layout/Layout";
import "./assets/css/Index.css";
import "./assets/css/font.css";
import DesignDetail from "./app/design/DesignDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/design/:slug" element={<DesignDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
