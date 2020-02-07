import React from 'react';
import { DraftItem } from '../Draft';

class Draft extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Draft</h2>
                {this.props.items.map(item =>
                    <DraftItem item={item}/>
                )}
            </React.Fragment>
        );
    }
}

export default Draft;