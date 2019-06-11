import React from 'react';
import Timestamp from './Timestamp.js';

const Message = (props) => {
  let messageSide = "local";
  if (props.sender === "Vladimir") {
    messageSide = "remote";
  };

  return (
    <section className={"chat-entry " + messageSide}>
      <b className="entry-name">{props.sender}</b>
      <section className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time"><Timestamp time={props.time} /></p>
      </section>
    </section>
  );
}

export default Message;