import React from 'react';
import { DraftItem } from '../Draft';

class Draft extends React.Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Draft</h5>
                <div className={'card-body' + (this.props.items.length > 0 ? ' mb-n4' : '')}>
                    {this.props.items.length === 0 && <span className="text-muted">No items!</span>}
                    {this.props.items.map(item =>
                        <div key={item.id}  className="mb-4">
                            <DraftItem 
                                item={item} 
                                onEdit={(id, text) => { this.props.onEdit(id, text) }} 
                                onRemove={id => { this.props.onRemove(id) }} 
                                onSave={id => { this.props.onSave(id) }} 
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Draft;