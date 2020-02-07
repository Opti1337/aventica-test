import React from 'react';
import { SavedItem } from '../Saved';

class Saved extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Saved</h2>
                {this.props.items.map(item =>
                    <SavedItem item={item}/>
                )}
            </React.Fragment>
        );
    }
}

export default Saved;