import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import {Home} from "./Pages/Home.jsx";
import './index.css';
function App() {
  return (
      <>
          <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
