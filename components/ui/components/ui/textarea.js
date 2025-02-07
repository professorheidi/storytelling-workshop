export function Textarea({ value, onChange, placeholder, name }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded"
    />
  );
}
