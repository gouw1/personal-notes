import React from "react";
import { getInitialData } from "../utils/index";
import NoteBody from "./NotesBody";
import NoteHeader from "./NoteHeader";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchedNotes: [],
      searchTitle: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
  }

  onSearchEventHandler(searchedTitle) {
    let searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchedTitle.toLowerCase()));
    if (this.state.searchTitle.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
  }
  onSearchHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <SearchBar onSearch={this.onSearchHandler} searchTitle={this.state.searchTitle} />
        <React.Fragment>
          <NoteHeader onSearchChange={this.onSearchChangeEventHandler} searchTitle={this.state.searchTitle} />
          <NoteBody addNote={this.onAddNoteHandler} notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </React.Fragment>
      </>
    );
  }
}

export default NoteApp;
