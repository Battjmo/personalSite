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
// // {"Scarlet Rush":"d64045","Frozen Water":"e9fff9","Frosted Blue":"9ed8db","Rich Cerulean":"467599","Twilight Indigo":"1d3354","Black":"000000"}

/*
scarlet: Primary, logo
Frozen Water: background
Frosted Blue: secondary
Rich cerulean: headers
Twilight: CTAs
Black: text-primary
*/