import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RedirectPage from "./components/RedirectPage";

let url: string = "https://google.com"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={"test"} element={<RedirectPage redirectLink={url}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
