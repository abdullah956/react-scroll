import './App.css';
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
function App() {
  return (
    <div className="App">
      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom/>

      {/* Scroll to a Particular Section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
