import React from 'react';

class SavedItem extends React.Component {
    render() {
        let flagStyles = {
            position: 'absolute',
            width: '30px',
            height: '30px',
            right: '1.25rem',
            top: '1.25rem'
        };

        let item = this.props.item;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="card-title" >{item.text}</div>
                    <button type="button" className="btn btn-primary mr-1">Draft</button>
                    <button type="button" className="btn btn-secondary">Mark</button>
                    <div className={item.flag ? 'bg-success' : 'bg-danger'} style={flagStyles}></div>
                </div>
            </div>
        );
    }
}

export default SavedItem;