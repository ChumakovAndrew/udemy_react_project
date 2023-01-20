import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: "Alex", salary: 1000, increase: false},
        {name: "Andrew", salary: 1000, increase: true},
        {name: "Alex", salary: 1000, increase: false},
        {name: "Andrew", salary: 1000, increase: false}
      ]
    }
  }


  render() {
    const {data} = this.state
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
    )
  }
}

export default App;
