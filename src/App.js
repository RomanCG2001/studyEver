import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProtectedRoutes } from "./components/protectedRoutes";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ResetPass } from "./components/ResetPass";
import { AuthProvider } from "./context/authContext";
import { Negocio1 } from "./pages/Negocio1";

function App() {
  return (
    <div className="h-screen text-black flex">
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
          <Route
            path="/negocio1"
            element={
              <ProtectedRoutes>
                <Negocio1 />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
