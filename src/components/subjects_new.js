import React, { Component } from "react";

class SubjectsNew extends Component {
  constructor(props) {
    super(props);
    this.state = { subject: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.onSubjectCreated(this.state.subject)
    this.setState({subject: ''})
  }


  render() {
    return (
      <form className="card p-2" onSubmit={this.handleAdd}>
        <div className="input-group">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="New Subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <input type="submit" value="Add" className="btn btn-secondary"/>
          </div>
        </div>
      </form>
    );
  }
}


export default SubjectsNew
