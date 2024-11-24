
const InputWithIcon = ({
  label, // Label for the input
  placeholder = "Enter text", // Placeholder for the input
  icon: Icon, // Icon component to render conditionally
  iconPosition = "left", // Position of the icon: "left" or "right"
  showIcon = false, // Whether to show the icon or not
  type = "text", // Input type: "text", "password", etc.
  value,
  onChange,
}) => {
  return (
    <div className="w-full my-4">
      {/* Label */}
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      
      <div className="relative">
        {/* Icon (conditionally rendered) */}
        {showIcon && Icon && iconPosition === "left" && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="text-gray-400 w-5 h-5" />
          </div>
        )}

        {/* Input */}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-6 py-4 outline-none border rounded-lg focus:outline-none ${
            showIcon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
          }`}
        />

        {/* Icon (conditionally rendered) */}
        {showIcon && Icon && iconPosition === "right" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon className="text-main w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWithIcon;
