import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProtectedRoutes } from "./components/protectedRoutes";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ResetPass } from "./components/ResetPass";
import { AuthProvider } from "./context/authContext";


function App() {
  return (
    <div className= "h-screen text-black flex">
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
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
