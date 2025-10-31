
interface Props {
  placeholder?: string;
  id: string;
  required?: boolean;
  type: string;
  labelFor: string;
  labelText: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onBlur?: () => void;
  accept?: string;
}

export const Input = ({
  placeholder,
  id,
  required = false,
  type,
  labelFor,
  labelText,
  value,
  onChange,
  onBlur,
  error,
  accept,
}: Props) => {

  const handleBlur = () => {
    onBlur?.(); 
  };
const hasError = !!error

  return (
    <div className="mb-5">
      <label
        htmlFor={labelFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        accept={accept}
        type={type}
        id={id}
        className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
          hasError 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
        placeholder={placeholder}
        required={required}
        value={type === 'file' ? undefined : value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};