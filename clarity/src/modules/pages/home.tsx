import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Notepad = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTitleError(false);
    setBodyError(false);

    if (!title) {
      setTitleError(true);
    }

    if (!details) {
      setBodyError(true);
    }

    if (title && details) {
        console.log(title, details);
    }
  }

  return (
    <form noValidate autoComplete="off">
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        label="Entry title"
        variant="outlined"
        fullWidth
        required
        error={titleError}
      />
      <TextField
        onChange={(e) => setDetails(e.target.value)}
        label="Jot down your thoughts..."
        variant="outlined"
        multiline
        rows="6"
        fullWidth
        required
        error={bodyError}
      />

      <Button
        onClick = {(e) => handleSubmit(e)}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
};

export default function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div style={{ color: "black" }}>
        <p>Create a journal entry</p>
      </div>
      <Notepad />
    </main>
  );
}
