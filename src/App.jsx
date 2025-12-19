import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Passion from "./components/Passion";
 
function App() {
  return (
    <div>
      <Topbar />
      <Header/>
      <Hero/>
      <Features/>
      <Passion/>
 
      {/* Just placeholder content under it */}
      <main style={{ padding: "24px" }}>
        <h2>Landing Page</h2>
        <p>Now we build the main navbar next.</p>
      </main>
    </div>
  );
}
 
export default App;