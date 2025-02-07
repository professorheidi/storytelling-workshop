export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
