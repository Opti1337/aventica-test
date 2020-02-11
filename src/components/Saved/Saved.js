import React from 'react';
import { SavedItem } from '../Saved';

class Saved extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Saved</h3>
                {this.props.items.map(item =>
                    <SavedItem key={item.id} item={item} onDraft={id => { this.props.onDraft(id) }} onMark={id => { this.props.onMark(id) }} />
                )}
            </React.Fragment>
        );
    }
}

export default Saved;