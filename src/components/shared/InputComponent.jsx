
const InputWithIcon = ({
  label, 
  placeholder = "Enter text", 
  icon: Icon, 
  iconPosition = "left",
  showIcon = false, 
  type = "text", // Input type: "text", "password".
  value,
  onChange,
}) => {
  return (
    <div className="w-full my-4">
      {/* Label */}
      {label && <label className="block text-sm font-normal mb-1">{label}</label>}
      
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
