import PostPreview from "./PostPreview";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import About from "../pages/About";
import Django from "../pages/Django";
import Flask from "../pages/Flask";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  //Routes where the Header should be hidden
  const hiddenRoutes = ["/about", "/django", "/flask"];

  //Check if the current route is in the hiddenRoutes array
  const hideHeader = hiddenRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen l">
      <div className="relative flex flex-grow">
        <div className="container mx-auto px-5">
          {!hideHeader && <Header />} {/* Conditionally render Header can add more components if needed */}
          <Routes>
            <Route path="/" element={<PostPreview />} />
            <Route path="/about" element={<About />} />
            <Route path="/django" element={<Django />} />
            <Route path="/flask" element={<Flask />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;