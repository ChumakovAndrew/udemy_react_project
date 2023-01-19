import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="andrew" salary="1000"/>
            <EmployeesListItem name="alex" salary="1000"/>
            <EmployeesListItem name="alex" salary="1000"/>
        </ul>
    )
}

export default EmployeesList;