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
        {name: "employee A", salary: 1000, increase: false,  like: false, id: 1 },
        {name: "employee B", salary: 1000, increase: true,  like: false, id: 2 },
        {name: "employee C", salary: 1000, increase: false,  like: false, id: 3 },
        {name: "employee D", salary: 1000, increase: false, like: true, id: 4 }
      ],
      term: '',
      filter: 'all'
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

  onToggleSwitch =(e, id) => {
    const dataSwitch = e.target.dataset.switch
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
            return {...item, [dataSwitch]: !item[dataSwitch]}
        }
        return item
      })
    }))
  }

  searchEmployees = (data, term) => {
    if(term.length === 0) {
      return data
    }

    return data.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterEmpoyees = (data, filter) => {
    switch(filter){
      case "like" : 
        return data.filter(item => item.like)
      case 'moreThen1000':
        return data.filter(item => item.salary > 1000)
      case 'increase':
        return data.filter(item => item.increase)
      default:
        return data
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }


  render() {
    const {data, term, filter} = this.state

    const allEmployees = data.length
    const encreased = data.filter(item => item.increase).length
    const visibledata = this.filterEmpoyees(this.searchEmployees(data, term), filter)
    return (
      <div className="app">
          <AppInfo 
          allEmployees = {allEmployees}
          encreased = {encreased}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
              <AppFilter filter = {filter} onUpdateFilter = {this.onUpdateFilter}/>
          </div>
          
          <EmployeesList 
            employees = {visibledata}
            onDelete = {this.deleteItem}
            onToggleSwitch = {this.onToggleSwitch}/>
          <EmployeesAddForm 
            onAddItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
