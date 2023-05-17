import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logOut, loading } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1 className="text-white">Cargando</h1>;

  return (
    <div className="relative inset-0 md:inset-y-0 right w-full max-w-xs m-auto text-gray-700">
      <div className="absolute inset-x-0 bottom-20 bg-white rounded shadow-md px-6 pt-6 pb-6 mb-4">
        <h1 className="text-xl">Bienvenido</h1>
        <h1 className="text-green-500 text-xl py-2">
          {user.displayName || user.email}
        </h1>
        <div className="py-2">
          <button
            onClick={handleLogOut}
            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
