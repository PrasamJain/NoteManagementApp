import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import axios from "axios";
import Header from "../components/Head";

export default function Home() {
    const msgStyle = {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "50vh",
        color: "#aaa",
        letterSpacing: "1px",
        fontSize: "1.3em",
    };
    const [notes, setNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);


    useEffect(() => {
        const fetchNotes = () => {
            axios
                .get("http://localhost:5000/allNotes")
                .then((res) => {
                    if (res.data.content) {
                        setNotes(res.data.content);
                        console.log(res.data)
                        setFilteredNotes(res.data.content); 
                    } else {
                        setNotes([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchNotes();
    }, []);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = notes.filter((note) =>
            note.title.toLowerCase().startsWith(lowercasedQuery) ||
            note.details.toLowerCase().startsWith(lowercasedQuery)
        );
        setFilteredNotes(filtered); 
    };
    

    return (
        <div>
            <Header onSearch={handleSearch} /> 
            <h1 className="headline">
                Save Your <span>Notes</span> Here
            </h1>

            <div className="cards">
                {filteredNotes && filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <NoteCard key={note._id} note={note} />
                    ))
                ) : (
                    <p style={msgStyle}>No Notes To Show</p>
                )}
            </div>
            <AddNote />
        </div>
    );
}
