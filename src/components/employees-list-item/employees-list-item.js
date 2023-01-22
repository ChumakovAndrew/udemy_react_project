import './employees-list-item.css';

import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            like: true
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    addCssClass = (stateItem, cssClass) => {
        if(stateItem){
            return(cssClass) 
        }else{
            return ""
        }
    }

    render(){
    const {name, salary, onDelete} = this.props
    const {increase, like} = this.state
    
    return (
        <li className={`${this.addCssClass(increase, 'increase')} list-group-item d-flex justify-content-between ${this.addCssClass(like, 'like')}`}>
            <span className={`list-group-item-label `}
                  onClick={this.onLike}>{name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary +"$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }
}

export default EmployeesListItem;