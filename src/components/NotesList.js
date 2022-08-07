import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
      ))}
    </div>
  );
};

export default NotesList;
