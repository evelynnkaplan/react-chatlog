import React from 'react';
import Timestamp from './Timestamp.js';

const Message = (props) => {
  return (
    <section className="chat-entry local">
      <p className="entry-name">{props.sender}</p>
      <section className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time"><Timestamp time={props.time} /></p>
      </section>
    </section>
  );
}

export default Message;