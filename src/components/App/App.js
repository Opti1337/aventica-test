import React from 'react';
import Header from '../Header';
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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDraft = this.handleDraft.bind(this);
    this.handleMark = this.handleMark.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleRemove(id) {
    this.setState({
      draftedItems: this.state.draftedItems.filter(item => {
        return item.id !== id;
      })
    });
  }

  handleSave(id) {
    let item = this.state.draftedItems.find(item => { return item.id === id });

    this.setState({
      draftedItems: this.state.draftedItems.filter(item => {
        return item.id !== id;
      }),
      savedItems: [...this.state.savedItems, item]
    });
  }

  handleDraft(id) {
    let item = this.state.savedItems.find(item => { return item.id === id });
    item.flag = false;

    this.setState({
      savedItems: this.state.savedItems.filter(item => {
        return item.id !== id;
      }),
      draftedItems: [...this.state.draftedItems, item]
    });
  }

  handleMark(id) {
    this.setState({
      savedItems: this.state.savedItems.map(item => {
        if (item.id === id) {
          item.flag = !item.flag;
        }

        return item;
      })
    });
  }

  handleEdit(id, text) {
    this.setState({
      draftedItems: this.state.draftedItems.map(item => {
        if (item.id === id) {
          item.text = text;
        }

        return item;
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mb-3">
          <Header items={this.state.savedItems} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="border p-3 mb-3">
                <FormCreate onCreate={this.onCreated} />
              </div>
              <div className="border p-3">
                <Draft items={this.state.draftedItems} onEdit={this.handleEdit} onRemove={this.handleRemove} onSave={this.handleSave} />
              </div>
            </div>
            <div className="col-8">
              <div className="border p-3">
                <Saved items={this.state.savedItems} onDraft={this.handleDraft} onMark={this.handleMark} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
