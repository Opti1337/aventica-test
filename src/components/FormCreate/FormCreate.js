import React from 'react';

class FormCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    setText(text) {
        this.setState({ text })
    }

    handleClick(toDraft) {
        if (!this.state.text) return;

        this.props.onCreate(this.state.text, toDraft);
        this.setText('');
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.text} onChange={e => this.setText(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary mr-1" onClick={this.handleClick.bind(this, true)}>Draft</button>
                <button type="button" className="btn btn-success" onClick={this.handleClick.bind(this, false)}>Save</button>
            </form>
        );
    }
}

export default FormCreate;