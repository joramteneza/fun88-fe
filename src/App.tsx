import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
