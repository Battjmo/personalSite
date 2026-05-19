import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import "./App.css";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
