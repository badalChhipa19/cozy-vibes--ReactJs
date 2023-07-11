import "./input-field.style.scss";

const InputField = ({ label, ...otherProps }) => {
  return (
    <div className="form__field_box">
      <input {...otherProps} required />
      <label>{label}</label>
    </div>
  );
};

export default InputField;
