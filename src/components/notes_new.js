import React, { Component } from "react";

class NotesNew extends Component {
  constructor(props) {
    super(props);
    this.state = { note: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.onNoteCreated(this.state.note)
    this.setState({note: ''})
  }


  render() {
    return (
      <footer>
      <form className="card p-2 mb-0" onSubmit={this.handleAdd}>
        <div className="input-group">
          <input
            type="text"
            name="note"
            className="form-control"
            placeholder="Add Note"
            value={this.state.note}
            onChange={this.handleChange} />
          <div className="input-group-append">
            <input type="submit" value="Add" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      </footer>
    );
  }
}


export default NotesNew
