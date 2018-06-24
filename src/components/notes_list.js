import React from "react";
import NoteListItem from "./note_list_item";

const NotesList = ({notes, onNoteRemove}) => {
  const noteItems = notes.map((note, index) => {
    return (
      <NoteListItem
        key={index}
        note={note}
        onNoteRemove={onNoteRemove}
      />
    );
  });
  return (
    <ul className="list-group mb-3">
      {noteItems}
    </ul>
  );
};

export default NotesList;
