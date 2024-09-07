import CommonLucideIcon from "../Icons/CommonLucideIcon"
import CommonTags from "../tags/CommonTags"

const DeviceTypes = {
    SMARTTV: "Smart TV",
    THERMOSTAT: "Smart Thermostat",
    SMARTSPEAKER: "Smart Speaker",
    SMARTWATCH: "Smart Watch",
    SMARTBULB: "Smart Light Bulb"
}
const DeviceIcons = {
    [DeviceTypes.SMARTTV]: "tv-minimal",
    [DeviceTypes.THERMOSTAT]: "thermometer-snowflake",
    [DeviceTypes.SMARTSPEAKER]: "speaker",
    [DeviceTypes.SMARTWATCH]: "watch",
    [DeviceTypes.SMARTBULB]: "lightbulb",

}


const DeviceStyle = (device) => {
    return (
        <div className="flex items-center gap-3 px-3">
            <CommonLucideIcon name={DeviceIcons[device]} />
            <div className="font-semibold">{device}</div>
        </div>
    )
}

const BooleanStyle = (value, type="YES/NO") => {
    value = value ? "Yes" : "No";
    return (
        <div className="text-center">
            <CommonTags value={value} />
        </div>
    )
}

export const tableColumnBody = (row, columnProps, column) => {
    if(column?.customColumnStyle) {
        return column.customColumnStyle(row[column.searchKey])
    }
    else {
        return <div className={column?.className}>{row[column.searchKey]}</div>
    }
}

export const customColumnStyles = {
    DEVICES: DeviceStyle,
    BOOLEANTAG: BooleanStyle,
}