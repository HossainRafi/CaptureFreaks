import { Route, Routes } from "react-router-dom";
import Error from "./component/Shared/Error";
import Footer from "./component/Shared/Footer";
import Header from "./component/Shared/Header";
import Home from './component/Home/Home';
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
