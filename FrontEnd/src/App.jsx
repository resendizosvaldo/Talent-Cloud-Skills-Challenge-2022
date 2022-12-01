import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from "./components/Usuarios";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Usuarios />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App