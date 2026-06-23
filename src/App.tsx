import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import PlayerView from "./PlayerView.tsx";
import GmView from "./GmView.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/player"}><PlayerView /></Route>
        <Route path={"/"}><GmView /></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
