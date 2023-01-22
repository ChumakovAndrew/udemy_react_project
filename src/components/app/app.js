import { Component } from 'react';
import { nanoid } from 'nanoid';

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
        {name: "Alex", salary: 1000, increase: false, id: 1 },
        {name: "Andrew", salary: 1000, increase: true, id: 2 },
        {name: "Alex", salary: 1000, increase: false, id: 3 },
        {name: "Andrew", salary: 1000, increase: false, id: 4 }
      ]
    }
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: nanoid()
    }
    this.setState(({data}) => ({
      data: data.concat(newItem)
    }))
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
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
          
          <EmployeesList 
            employees = {data}
            onDelete = {this.deleteItem}/>
          <EmployeesAddForm 
            onAddItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
