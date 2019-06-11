import React from 'react';
import Message from './Message.js';

const generateChatLog = (messages) => {
  return (messages.map((message) => {
    return (<Message 
      key={message.timeStamp}
      sender={message.sender} 
      body={message.body}
      time={message.timeStamp} />)
  }))
};

const ChatLog = (props) => {
  
  const chatLogContainer = generateChatLog(props.chatMessages);

  return (
    <section className=".chat-log">{chatLogContainer}</section>
  );

}

export default ChatLog;