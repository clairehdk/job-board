// Styles
import "./App.css";

// Composants
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Jobs />
      <Footer
        tech="React"
        formation="Le Réacteur"
        name="Claire Hart de Keating"
      />
    </div>
  );
}

export default App;
