import React from 'react';
import FormCreate from '../FormCreate';
import { Draft } from '../Draft';
import { Saved } from '../Saved';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      draftedItems: [],
      savedItems: []
    }

    this.onCreated = this.onCreated.bind(this);
  }

  onCreated(text, toDraft = false) {
    let item = {
      id: Date.now().toString(16),
      text,
      flag: false
    };

    if (toDraft) {
      this.setState({
        draftedItems: [...this.state.draftedItems, item]
      });
    } else {
      this.setState({
        savedItems: [...this.state.savedItems, item]
      });
    }
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <div className="border p-3 mb-3">
              <FormCreate onCreate={this.onCreated} />
            </div>
            <div className="border p-3">
              <Draft items={this.state.draftedItems} />
            </div>
          </div>
          <div className="col-8">
            <div className="border p-3">
              <Saved items={this.state.savedItems} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
