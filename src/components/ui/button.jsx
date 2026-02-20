export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-2xl font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}