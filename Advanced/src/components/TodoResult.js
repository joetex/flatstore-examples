import React from 'react';
import flatstore from 'flatstore';
import { todoToggleComplete } from '../services/todo';

class TodoResult extends React.Component {


    render() {
        return (
            <div
                className={this.props.completed ? "completed" : ""}
                onClick={() => { todoToggleComplete(this.props.id) }}>

                <span className="result-title">{this.props.desc}</span> -
                <span className="result-date">{this.props.dateCreated}</span>
            </div >
        );
    }
}

let onCustomWatched = (ownProps) => {
    return ['todos-' + ownProps.id];
}

let onCustomProps = (key, value, store, ownProps) => {
    return {
        ...value
    }
}

export default flatstore.connect([], onCustomWatched, onCustomProps)(TodoResult);