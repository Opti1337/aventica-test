import React from 'react';
import { DraftItem } from '../Draft';

class Draft extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Draft</h3>
                {this.props.items.map(item =>
                    <DraftItem 
                        key={item.id} item={item} 
                        onEdit={(id, text) => { this.props.onEdit(id, text) }} 
                        onRemove={id => { this.props.onRemove(id) }} 
                        onSave={id => { this.props.onSave(id) }} 
                    />
                )}
            </React.Fragment>
        );
    }
}

export default Draft;