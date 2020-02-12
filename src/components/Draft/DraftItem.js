import React from 'react';

class DraftItem extends React.Component {
    render() {
        let item = this.props.item;

        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <input type="text" className="border-0" value={item.text} onChange={e => { this.props.onEdit(item.id, e.target.value) }} />
                    </div>
                    <button type="button" className="btn btn-danger mr-1" onClick={e => { this.props.onRemove(item.id) }}>Remove</button>
                    <button type="button" className="btn btn-success" onClick={e => { this.props.onSave(item.id) }}>Save</button>
                </div>
            </div>
        );
    }
}

export default DraftItem;