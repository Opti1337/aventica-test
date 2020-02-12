import React from 'react';
import { SavedItem } from '../Saved';

class Saved extends React.Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Saved</h5>
                <div className={'card-body' + (this.props.items.length > 0 ? ' mb-n4' : '')}>
                    {this.props.items.length === 0 && <span className="text-muted">No items!</span>}
                    <div className="row">
                        {this.props.items.map(item =>
                            <div key={item.id}  className="col-md-4">
                                <div className="mb-4">
                                    <SavedItem 
                                        item={item} 
                                        onDraft={id => { this.props.onDraft(id) }} 
                                        onMark={id => { this.props.onMark(id) }} 
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;