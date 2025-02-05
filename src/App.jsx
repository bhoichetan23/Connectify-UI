import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/Body'
import Login from "./components/Login";
import appStore from "./utils/appStore";

export default function App() {
  return (
   
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
