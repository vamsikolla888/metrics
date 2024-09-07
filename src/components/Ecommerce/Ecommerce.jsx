import CommonDatatable from "../../common/tables/CommonDatatable"
import { useGetAllDetailsQuery } from "../../redux/Apislice"
const Ecommerce = () => {
  const { data } = useGetAllDetailsQuery("users")
  const tableFields = [
    {name: "name", searchKey: "name", title: "Name"},
    {name: "email", searchKey: "email", title: "Email"},
    {name: "city", searchKey: "city", title: "City"},
    {name: "state", searchKey: "state", title: "State"},
    {name: "role", searchKey: "role", title: "Role"},


  ]
  return (
    <div className="">
      <CommonDatatable tableFields={tableFields} results={data?.users}/>
    </div>
  )
}

export default Ecommerce