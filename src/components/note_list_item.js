import React from "react";

const NoteListItem = ({ note, onNoteRemove }) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <span>{note}</span>
      </div>
      <a href="#" className="text-muted" onClick={() => onNoteRemove(note)}> x </a>
    </li>
  );
};

export default NoteListItem;
