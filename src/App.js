import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { TokenHooks } from "./Hooks/TokenHook";
import ComeWork from "./Pages/ComeWork/ComeWork";
import MyComponent from "./Pages/MyComponent/MyComponent";
import Users from "./Pages/Users/Users";
import Private from "./Private";
import Public from "./Public";

function App() {
const {token} = TokenHooks()
      if (!token) {
        return <Public/>
      }
        return (
          <div>
            <Header/>
      <Routes>
        <Route path="/*" element={<Users/>} />
        <Route path="/day/*" element={<ComeWork/>} />
        <Route path="/month/*" element={<MyComponent/>} />
      </Routes>
          </div>
        )

}

export default App;
