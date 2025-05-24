import Layout from "./components/Layout";
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-black font-sans relative"> 
      <div className="fixed w-full min-w-[320px] flex flex-col items-center pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-4 px-4 h-min z-40">
        <Navbar />
      </div>
      <Layout /> 
      <About />
      <Projects/>
      
      
      
    </div>
  );
}

export default App;