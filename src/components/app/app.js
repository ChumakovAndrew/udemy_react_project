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
        {name: "Alex", salary: 1000, increase: false,  like: false, id: 1 },
        {name: "Andrew", salary: 1000, increase: true,  like: false, id: 2 },
        {name: "Alex", salary: 1000, increase: false,  like: false, id: 3 },
        {name: "Andrew", salary: 1000, increase: false, like: true, id: 4 }
      ],
      numberOfEmployees: null
    }
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      like: false,
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

  onToggleSwitch =(dataSwitch, id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          if(dataSwitch === 'like'){
            return {...item, like: !item.like}
          }
          else{
            return {...item, increase: !item.increase}
          }
        }
        return item
      })
    }))
  }

  render() {
    const {data} = this.state

    const allEmployees = data.length
    const encreased = data.filter(item => item.increase).length
    return (
      <div className="app">
          <AppInfo 
          allEmployees = {allEmployees}
          encreased = {encreased}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            employees = {data}
            onDelete = {this.deleteItem}
            onToggleSwitch = {this.onToggleSwitch}/>
          <EmployeesAddForm 
            onAddItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
