export function Input({ name, value, onChange, placeholder }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
}
