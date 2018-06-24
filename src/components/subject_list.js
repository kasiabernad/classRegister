import React from "react";
import SubjectListItem from "./subject_list_item";

const SubjectList = (props) => {
  const subjectItems = props.subjects.map(subject => {
    return (
      <SubjectListItem
        key={subject}
        subject={subject}
        onSubjectSelect={props.onSubjectSelect}
        onSubjectRemove={props.onSubjectRemove}
        average={props.average}
        selected={props.selected}
      />
    );
  });
  return (
    <ul className="list-group mb-3">
      {subjectItems}
    </ul>
  );
};

export default SubjectList;
