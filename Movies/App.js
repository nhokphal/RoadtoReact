import InvidualMovies from "./Movie/InvidualMovies";
import "./styles.css";

export default function App() {
  // display data

  const testMovies: movieDTO = {
    id: 1,
    title: "home",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg"
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <InvidualMovies {...testMovies} /> // use ... to use all method from testMovies
    </div>
  );
}
