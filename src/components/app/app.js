import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {name: "Alex", salary: 1000},
  {name: "Andrew", salary: 1000},
  {name: "Alex", salary: 1000},
  {name: "Andrew", salary: 1000}
]

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList employees={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
