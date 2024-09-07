import { useForm } from "react-hook-form";
import CommonDropdown from "../common/form/dropdowns/CommonDropdown";
import CommonSelect from "../common/form/select/CommonSelect";
import CommonRadio from "../common/form/radio/CommonRadio";
import CommonCheckbox from "../common/form/checkbox/CommonCheckbox";
import CommonButton from "../common/button/CommonButton";
import CommonInput from "../common/form/Inputs/CommonInput";
import { useDispatch } from "react-redux";
import { hideDialog, DialogTypes } from "../redux/reducers/Uislice";
const Test = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const countries = [
    { name: "India", code: "IN"},
    { name: "America", code: "IN"},
    { name: "China", code: "IN"},
    { name: "Japan", code: "IN"},
    { name: "Russia", code: "IN"},

  ]
  const submitter = (value) => {
    console.log("VALUE", value);
    dispatch(hideDialog({ type: DialogTypes.COMMONDIALOG}))
  }
  return (
    <form onSubmit={handleSubmit(submitter)}>
      <div>
        <div className="grid xl:grid-cols-2 xl:gap-8">
          <CommonInput
            name="deviceName"
            label="Device Name"
            placeholder={"Enter Device name"}
            control={control}
          />
          <CommonInput
            name="deviceType"
            label="Device Type"
            placeholder={"Enter Device Type"}
            control={control}
          />
          <CommonInput
            name="ipAddress"
            label="IP Address"
            placeholder={"Enter IP Address"}
            control={control}
          />
          
            {/* <CommonDropdown
            label="Select"
            name="select"
            control={control} 
            options={countries}
            optionLabel="name"
            />
            <CommonDropdown
            label="Select"
            name="select"
            control={control} 
            options={countries}
            optionLabel="name"
            />
            <CommonDropdown
            label="Select"
            name="select3"
            control={control} 
            options={countries}
            optionLabel="name"
            />
            <CommonSelect
            label="Select"
            name="select4"
            control={control} 
            options={countries}
            optionLabel="name"
            />
            <CommonRadio
            label="Radio"
            name="radio"
            control={control} 
            options={countries}
            optionLabel="name"
            />
            <CommonCheckbox
            label="Checkbox"
            name="checkbox"
            control={control} 
            options={countries}
            optionLabel="name"
            /> */}
        </div>
        <div className="flex items-center justify-end gap-5 p-5 my-4">
            <CommonButton.Cancel onClick={() => dispatch(hideDialog({ type: DialogTypes.COMMONDIALOG}))}>Cancel</CommonButton.Cancel>
            <CommonButton>Submit</CommonButton>
          </div>
      </div>
    </form>
  )
}

export default Test