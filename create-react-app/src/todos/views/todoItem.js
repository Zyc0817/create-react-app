import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';


class TodoItem extends React.Component {
    constructor() {
        super(...arguments);

        console.log('enter TodoItem constructor: ' + this.props.text);
    }

    render() {
        const {onToggle, onRemove, completed, text } = this.props;

        console.log('enter TodoItem render: ' + text);

        return (
            <li className="todo-item"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>×</button>
            </li>
        );
    };

    componentDidMount() {
        setTimeout(function() {
            console.log(1)
        }, 0)
        new Promise(function executor(resolve) {
            console.log(2);
            for(var i = 0;i<9999;i++) {
                i ==9999 && resolve();
            }
            console.log(3)
        }).then(function() {
            console.log(4)
        })
        console.log(5)
    }
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps;
    return {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
};

export default connect(null, mapDispatchToProps)(TodoItem);