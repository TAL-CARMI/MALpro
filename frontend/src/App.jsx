import { Button } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [ratingValues, setRatingValues] = useState([0, 10]);

  return (
    <>
      <form>
        <SearchBar
          ratingValues={ratingValues}
          ratingHandleChange={setRatingValues}
        />
      </form>
    </>
  );
}

export default App;
