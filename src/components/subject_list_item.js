import React from "react";

const SubjectListItem = (props) => {
  function isSelected(subject) {
    return props.selected === subject
  }

  return (
    <li className={`list-group-item d-flex justify-content-between lh-condensed ${isSelected(props.subject) ? 'bg-light' : ''}`}>
      <div>
        <a href="#" onClick={() => props.onSubjectSelect(props.subject)} className="my-0">{props.subject}</a>
        <span className="badge badge-secondary badge-pill ml-2">{props.average(props.subject)}</span>
      </div>
      <a href="#" className="text-muted" onClick={() => props.onSubjectRemove(props.subject)}> x </a>
    </li>
  );
};

export default SubjectListItem;
