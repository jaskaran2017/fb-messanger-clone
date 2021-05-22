import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Components/Message";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./Components/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // { usename: "Jass", message: "Hello brother" },
    // { username: "Rajni", message: "Love you" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
  // console.log(messages);

  const sendmsg = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt="Logo"
      />
      <h1>This is FaceBook Clone 🥰</h1>
      <h2>Welcome {username}</h2>

      <form className="move_bottom">
        <FormControl className="form_flex">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="input_flex"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-describedby="my-helper-text"
          />
          <IconButton
            className="icon_flex"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendmsg}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
