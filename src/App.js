import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News/News";
import "./components/News/News.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/category/:categoryId" element={<News />} /> 
        <Route path="/news/:newsId" element={<Main/>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App; 
