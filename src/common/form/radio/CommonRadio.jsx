import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { RadioButton } from "primereact/radiobutton";

const PrimeRadio = ( { name, label, placeholder, field, options, optionLabel} ) => {
    console.log("FIELD VALUE", field);
  return (
    <div>
        <label className="mb-2.5 block font-medium text-black dark:text-white">{label}</label>
        <div className="flex items-center gap-2">
            {
                options.map( option => (
                    <>
                        <RadioButton
                            key={option}
                            className={`box mr-2 h-5 w-5 items-center justify-center rounded-full border-primary border-2`}
                            placeholder={placeholder}
                            name={name}
                            id={name}
                            value={option[optionLabel]}
                            inputId={option[optionLabel]}
                            onChange={ e => { console.log(e.target), field.onChange(e.value)}}
                            checked={field?.value === option[optionLabel]}
        
                        />
                        <label className="block font-medium text-black dark:text-white mr-2">{option[optionLabel]}</label>
                    </>
                ))
            }
        </div>
    </div>
  )
}

const CommonRadio = (props) => {
    const { name, control } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field}) => (
                <PrimeRadio {...props} field={field}/>
            )}
        />
    )
}

CommonRadio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    control: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    ...PrimeRadio.propTypes
}

PrimeRadio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    optionLabel: PropTypes.string.isRequired
}


export default CommonRadio