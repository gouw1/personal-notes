import React from "react";

const ArchiveButton = (id, onArchive, isArchived) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
};

export default ArchiveButton;
