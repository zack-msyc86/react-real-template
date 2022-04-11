import { Routes, Route } from "react-router-dom";
import TopPage from "@/components/pages/TopPage";

export default () => {
  return (
    <Routes>
      <Route index element={<TopPage />} />
    </Routes>
  )
}

