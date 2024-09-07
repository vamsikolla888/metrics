import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const Input = ({ name, label, placeholder, type, field}) => {
    return (
        <div className="my-2 mx-3">
            <label className="mb-2.5 block font-medium text-black dark:text-white">{label}</label>
            <InputText
                type={type}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                placeholder={placeholder}
                name={name}
                id={name}
                value={field.value}
                onChange={ e => field.onChange(e.target.value)}
            />
        </div>
    )
}

const CommonInput = (props) => {
    const { name, control } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field}) => (
                <Input {...props} field={field}/>
            )}
        />
    )
}

CommonInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    control: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    ...Input.propTypes
}
Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
}


export default CommonInput;