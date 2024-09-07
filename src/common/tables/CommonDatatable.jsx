import PropTypes from "prop-types";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { tableColumnBody } from "./TableColumnStyles";
import CommonButton from "../button/CommonButton";
import CommonDialog from "../dialog/CommonDialog";
import Devices from "../../components/Devices/Devices";
import { useDispatch } from "react-redux";
import { DialogTypes, hideDialog, showDialog } from "../../redux/reducers/Uislice";
import { useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Test from "../../components/Test";


const CommonDatatable = ({ results, tableFields }) => {
  const dispatch = useDispatch();
  useEffect(() => {

  }, [dispatch])
  return (
    <div className="dark:bg-boxdark dark:text-white">
        <div className="flex items-center justify-between h-20 w-full px-2">
          <p className="text-xl font-semibold uppercase">Devices</p>
          <CommonButton onClick={() => dispatch(showDialog({ type: DialogTypes.COMMONDIALOG}))}>Add Device</CommonButton>
          {/* <div>
            <button className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90">Add Device</button>
          </div> */}
        </div>
        <DataTable 
        className="dark:bg-boxdark dark:text-white"
        value={ results && results }
        resizableColumns
        columnResizeMode="expand"
        // paginator 
        paginatorClassName="dark:bg-boxdark dark:text-white"
        scrollable={false}
        stripedRows
        rows={10}
        // selectionMode={"multiple"}
        rowsPerPageOptions={[5, 10, 25]}
        >
          {
            /**@COLUMNS */
            tableFields.map((column) => (
            <Column 
              key={column.name}
              field={column.searchKey} 
              header= {column.header}
              headerClassName="text-center m-auto dark:bg-boxdark dark:text-white text-capitalize"
              className="dark:bg-boxdark dark:text-white"
              body={(row, columnProps) => tableColumnBody(row, columnProps, column)}
              />))
          }
      </DataTable>
      <CommonDialog>
        <Test/>
      </CommonDialog>
    </div>
  )
}

CommonDatatable.propTypes = {
  results: PropTypes.array.isRequired,
  tableFields: PropTypes.array.isRequired,
};



export default CommonDatatable