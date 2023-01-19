import EmployeesListItem from "../employees-list-item/employees-list-item";
import { nanoid } from 'nanoid'

import './employees-list.css';


const EmployeesList = ({employees}) => {

   const employeesItems = employees.map(item => {
        return(
            <EmployeesListItem {...item} key={nanoid()}/>
        )
   })

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    )
}

export default EmployeesList;