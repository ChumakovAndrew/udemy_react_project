import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({employees, onDelete, onToggleSwitch}) => {

   const employeesItems = employees.map(item => {
    const {id, ...itemProps} = item
        return(
            <EmployeesListItem 
            {...itemProps} 
            key={id} 
            onDelete={() => onDelete(id)}
            onToggleSwitch={(e) => onToggleSwitch(e, id)}/>
        )
   })

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    )
}

export default EmployeesList;