import React from 'react';

class SavedItem extends React.Component {
    render() {
        let flagStyles = {
            position: 'absolute',
            width: '20px',
            height: '20px',
            right: '1.25rem',
            top: '1.25rem',
            borderRadius: '50%'
        };

        let item = this.props.item;

        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title" >{item.text}</div>
                    <button type="button" className="btn btn-primary mr-1" onClick={e => { this.props.onDraft(item.id) }}>Draft</button>
                    <button type="button" className="btn btn-secondary" onClick={e => { this.props.onMark(item.id) }}>Mark</button>
                    <div className={item.flag ? 'bg-success' : 'bg-danger'} style={flagStyles}></div>
                </div>
            </div>
        );
    }
}

export default SavedItem;