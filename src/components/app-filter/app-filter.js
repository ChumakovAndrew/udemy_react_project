import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'increase', label: 'Премия'},
        {name: 'MoreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const cssClass = active ? "btn-light" : "btn-outline-light";
       return ( 
            <button type="button"
                    key={name}
                    className={"btn " + cssClass}
                    data-filter={name}
                    onClick={() => {props.onUpdateFilter(name)}}>
                    {label}
            </button>)
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;