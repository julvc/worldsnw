import { Routes, Route } from "react-router-dom";
import { Homepage, BlogContentpage } from "./pages";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/blog/:id" element={<BlogContentpage />}> </Route>
      </Routes>
    </div>
  )
}