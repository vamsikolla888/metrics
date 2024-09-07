import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Checkbox } from "primereact/checkbox";


const PrimeCheckbox = ( { name, label, placeholder, field, options, optionLabel } ) => {
    const onChange = (event) => {
        if(event.checked) {
            field.onChange(field.value ? Array.from(new Set([...field.value, event.value])): [event.value])
        }
        else field.onChange(field?.value.filter(checked => checked !== event.value));
    }
    return (
        <div>
            <label className="mb-2.5 block font-medium text-black dark:text-white">{label}</label>
            <div className="flex items-center gap-2">
                {
                    options.map( option => (
                        <>
                            <Checkbox
                                key={option}
                                className={`box mr-2 h-5 w-5 items-center justify-center rounded-full`}
                                placeholder={placeholder}
                                name={name}
                                id={name}
                                value={option[optionLabel]}
                                inputId={option[optionLabel]}
                                onChange={onChange}
                                checked={field?.value?.some(value => value === option[optionLabel])}
                            />
                            <label className="block font-medium text-black dark:text-white mr-2">{option[optionLabel]}</label>
                        </>
                    ))
                }
            </div>
        </div>
    )

}

const CommonCheckbox = (props) => {
 const { name, control } = props;
  return (
    <Controller
        name={name}
        control={control}
        render={({ field}) => (
            <PrimeCheckbox {...props} field={field}/>
        )}
    />
  )
}

CommonCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    control: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    ...PrimeCheckbox.propTypes
}

PrimeCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    optionLabel: PropTypes.string.isRequired
}


export default CommonCheckbox