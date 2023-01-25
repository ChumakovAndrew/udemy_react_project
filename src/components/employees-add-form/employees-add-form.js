import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            salary: '',
            error: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const {name, salary} = this.state
        const { onAddItem } = this.props
        if (name === '' || salary === '') {
            this.setState({
                name: '',
                salary: '',
                error: 'введите корректные данные'
            })
            return
        }

        onAddItem(name, salary)

        this.setState({
            name: '',
            salary: '',
            error: ''
        })
    }
    
    
    render() {
        const {name, salary, error} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника </h3>
                <h5>{error}</h5>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name' 
                        onChange={this.onValueChange}
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        onChange={this.onValueChange}
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;