function InputUI({ type, name, displayName, inputClassName, labelClassName, required }) {
    return (
        <div>
            <label className={labelClassName}>{displayName}</label>
            <input type={type} name={name} className={inputClassName} placeholder={displayName} required={required} />
        </div>
    );
}

export default InputUI;