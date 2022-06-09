import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import PageRender from "./pages/pageRender";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:id" element={<PageRender />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
