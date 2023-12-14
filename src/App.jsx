import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import { BallTriangle } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#3b82f6"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
          :

          <div className="bg-slate-900">
            <Nav />
            <Introduction />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
      }
    </>
  );
};

export default App;