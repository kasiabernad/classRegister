import React, { Component } from "react";
import ReactDOM from "react-dom";
import SubjectList from './components/subject_list'
import SubjectsNew from './components/subjects_new'
import NotesList from './components/notes_list'
import NotesNew from './components/notes_new'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { subjects: [], selectedSubject: '', notes: {} }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.setSelectedSubject = this.setSelectedSubject.bind(this);
    this.removeSubject = this.removeSubject.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.calculateSubjectAverage = this.calculateSubjectAverage.bind(this);
  }

  handleAdd(newSubject) {
    this.setState({ subjects: [...this.state.subjects, newSubject] });
  }

  handleNoteAdd(newNote) {
    let stateCopy = Object.assign({}, this.state);
    const selectedSubject = stateCopy.selectedSubject;
    const prevNotes = stateCopy.notes[selectedSubject] || [];
    stateCopy.notes[selectedSubject] = [...prevNotes, newNote];

    this.setState(stateCopy);
  }

  setSelectedSubject(subject) {
    this.setState({selectedSubject: subject })
  }

  calculateSubjectAverage(subject) {
    if (!this.state.notes[subject] || this.state.notes[subject].length === 0) {
      return
    }
    const notes = this.state.notes[subject]
    const arrAvg = notes.reduce((a,b) => parseInt(a) + parseInt(b), 0) / notes.length
    return arrAvg
  }

  calculateGeneralAverage() {
    const keys = Object.keys(this.state.notes)
    const values = [].concat( ...Object.values(this.state.notes))

    if (values.length === 0) {
      return
    }
    const arrAvg = values.reduce((a,b) => parseInt(a) + parseInt(b), 0) / values.length
    return arrAvg
  }

  removeSubject(subject){
    let stateCopy = Object.assign({}, this.state);
    var index = stateCopy.subjects.indexOf(subject);
    if (index > -1) {
      stateCopy.subjects.splice(index, 1);
      delete stateCopy.notes[subject];
      stateCopy.selectedSubject = '';
    }
    this.setState(stateCopy)
  }

  removeNote(note){
    let stateCopy = Object.assign({}, this.state);
    var index = stateCopy.notes[this.state.selectedSubject].indexOf(note);
    if (index > -1) {
      stateCopy.notes[this.state.selectedSubject].splice(index, 1);
    }
    this.setState(stateCopy)
  }

  renderNotes() {
    const selectedSubject = this.state.selectedSubject

    if (!selectedSubject) {
      return
    }

    return (
      <div>
        {this.renderNotesList()}
        <NotesNew onNoteCreated={this.handleNoteAdd}/>
      </div>
    )
  }

  renderNotesList() {
    const selectedSubject = this.state.selectedSubject

    if (!this.state.notes[selectedSubject]) {
      return
    }

    return <NotesList notes={this.state.notes[selectedSubject]} onNoteRemove={this.removeNote}/>
  }

  render() {
    return (
      <div>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">My Class Register</span>
          <span className="badge badge-secondary badge-pill">{this.calculateGeneralAverage()}</span>
        </h4>
        <div className="row row-eq-height">
          <div className="col-md-6 mb-4">
            <SubjectList
              subjects={this.state.subjects}
              onSubjectSelect={this.setSelectedSubject}
              onSubjectRemove={this.removeSubject}
              average={this.calculateSubjectAverage}
              selected={this.state.selectedSubject}
              />
            <SubjectsNew onSubjectCreated={this.handleAdd}/>
          </div>
          <div className="col-md-6 mb-4">
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
