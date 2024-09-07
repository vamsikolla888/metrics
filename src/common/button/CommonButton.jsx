import PropTypes from "prop-types";
const CommonButton = ({children, className = "border-primary bg-primary", onClick = () => {}}) => {
    return (
        <button
        className={`cursor-pointer rounded-lg border px-6 py-3 text-white transition hover:bg-opacity-90 ${className}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
// const CommonButton = () => {
//   return (
//     <div>CommonButton</div>
//   )
// }

CommonButton.Cancel = ({children, onClick }) => {
    return <CommonButton className={"bg-[#dc3545] border-[#dc3545]"} onClick={onClick}>{children}</CommonButton>
}

CommonButton.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}
CommonButton.Cancel.propTypes = {
    ...CommonButton.propTypes,
}
CommonButton.Cancel.displayName = "CancelButton";


export default CommonButton