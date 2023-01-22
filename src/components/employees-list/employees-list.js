import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({employees, onDelete}) => {

   const employeesItems = employees.map(item => {
    const {id, ...itemProps} = item
        return(
            <EmployeesListItem {...itemProps} key={id} onDelete={() => onDelete(id)}/>
        )
   })

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    )
}

export default EmployeesList;