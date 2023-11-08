
import { Route, Routes } from "react-router-dom"
import Users from "./Pages/Users/Users"
import ComeWork from "./Pages/ComeWork/ComeWork"
import MyComponent from "./Pages/MyComponent/MyComponent"
import Header from "./Components/Header/Header"

function Private () {

     <div>
     <Header/>
      <Routes>
        <Route path="/*" element={<Users/>} />
        <Route path="/day/*" element={<ComeWork/>} />
        <Route path="/month/*" element={<MyComponent/>} />
      </Routes>
      </div>
}

export default Private;