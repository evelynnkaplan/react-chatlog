import React from 'react';

const Message = (props) => {

  return (
    <section className="chat-entry local">
      <section className="entry-bubble">
        <p className="entry-body">{props.body}</p>
      </section>
    </section>
  );
}

export default Message;