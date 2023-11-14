import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };
  const [word, setWord] = useState("");
  return (
    <div>
      <Header title="Images GALARY" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
