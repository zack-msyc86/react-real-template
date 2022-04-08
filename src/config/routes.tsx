import { Routes, Route } from "react-router-dom";
import TopPage from "@/components/pages/TopPage";
import { ReactNode } from "react";
type Page = {
  path: string,
  element: () => ReactNode
}
export default () => {
  const pages: Array<Page> = [
    { path: '/', element: TopPage }
  ]
  return (
    <Routes>
      { pages.map(p => <Route path={p.path} key={p.path} element={p.element()}/>) }
    </Routes>
  )
}

