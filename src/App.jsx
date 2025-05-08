import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import UsersInput from "./components/UsersInput";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/RandomColor" replace />} /> */}
      <Route path="/ColorPalette" element={<ColorPalette />} />
      <Route path="/RandomColor" element={<UsersInput />} />
    </Routes>
  );
}

export default App;
