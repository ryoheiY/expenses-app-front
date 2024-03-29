/**
 * selectタグのUIクラス
 * @param {*} param0
 * @returns
 */
function SelectUI({name, displayName, inputClassName, labelClassName, options, required}) {
    return (
        <div>
            <label className={labelClassName}>{displayName}</label>
            <select name={name} className={inputClassName} required={required}>
                {options.map(opt => <option key={opt.name} value={opt.val}>{opt.name}</option>)}
            </select>
        </div>
    );
}

export default SelectUI;