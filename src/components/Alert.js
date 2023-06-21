export function Alert({ message }) {
  return (
    <div className="bg-white border-2 border-green-500 text-green-700 px-3 py-3 rounded sticky mb-4 text-center">
      <span className="sm:inline-block">{message}</span>
    </div>
  );
}

export default Alert;
