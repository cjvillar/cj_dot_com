
import PostPreview from "./PostPreview";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "../pages/About";
import Django from "../pages/Django";

function App() {
  return (
    // <div className="min-h-screen"> 
    <div class="min-h-screen flex flex-col">
      <div class='relative flex flex-grow'>
      <div className="container mx-auto px-5">
        <Header></Header>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPreview />} />
        <Route path="/about" element={<About />} />
        <Route path="/django" element={<Django />} />
      </Routes>
    </BrowserRouter>
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
}

export default App;
