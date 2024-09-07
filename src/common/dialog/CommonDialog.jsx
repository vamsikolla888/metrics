// import PropTypes from "prop-types";
// import { Dialog } from 'primereact/dialog';
// import { useDispatch, useSelector } from "react-redux";
// import { DialogTypes, hideDialog } from "../../redux/reducers/Uislice";
// const CommonDialog = ({children}) => {
//     const { dialogs } = useSelector(state => state.Uislice);
//     const dispatch = useDispatch();
//   return (
//     <Dialog 
//         visible={dialogs.commonDialog}
//         modal
//         onHide={() => dispatch(hideDialog({ type: DialogTypes.COMMONDIALOG }))}
//     >
//         {children}
//     </Dialog>
//   )
// }

// CommonDialog.propTypes = {
//     children: PropTypes.node.isRequired,
// };
// export default CommonDialog

import PropTypes from "prop-types";
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { DialogTypes, hideDialog } from "../../redux/reducers/Uislice";

const CommonDialog = ({ children, ...props }) => {
    const { commonDialog } = useSelector(state => state.Uislice.dialogs, shallowEqual);
    const dispatch = useDispatch();

    const onHide = () => {
        dispatch(hideDialog({ type: DialogTypes.COMMONDIALOG }));
    };

    return (
        <Dialog 
            style={{width: "60%"}}
            baseZIndex={10000}
            visible={commonDialog} // Updated to directly extract `commonDialog`
            onHide={onHide}
            {...props} // Allow additional props to be passed down
        >
            {children}
        </Dialog>
    );
};

CommonDialog.propTypes = {
    children: PropTypes.node.isRequired, // Validating `children` is passed
};

export default CommonDialog;
