import './component-css/input-field-css.css';

interface InputFieldProps {
    label: string;
    type: string;
    inputStyle?: object;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({label, type, inputStyle, value, onChange}: InputFieldProps) {

    return (
        <div className="text-field" style={inputStyle}>
            <input type={type} required style={{ width: '100%' }} value={value} onChange={onChange}/>
            <label>{label}</label>
        </div>
    )
}