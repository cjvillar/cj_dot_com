import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-5">
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
