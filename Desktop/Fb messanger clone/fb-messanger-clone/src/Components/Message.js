import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "user_card" : "guest_card"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
          {/*here this snippit of code will hide the logged in persons name while in chat in front of the message and show the name of the person whom you are chatting with in front of there m*/} 
            {!isUser && `${message.username}:`} {message.message} 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
