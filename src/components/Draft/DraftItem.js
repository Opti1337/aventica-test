import React from 'react';

class DraftItem extends React.Component {
    render() {
        let item = this.props.item;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="card-title">{item.text}</div>
                    <button type="button" className="btn btn-danger mr-1">Remove</button>
                    <button type="button" className="btn btn-success">Save</button>
                </div>
            </div>
        );
    }
}

export default DraftItem;