import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProtectedRoutes } from "./components/protectedRoutes";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { EncodeRSA } from "./components/EncodeRSA";

function App() {
  return (
    <div className="bg-slate-700 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
