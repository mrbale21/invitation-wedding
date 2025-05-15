import "./App.css";
import FirstPage from "./components/firsPage";
import Introduction from "./components/introduction";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Introduction />} />
        <Route path="/open" element={<FirstPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
