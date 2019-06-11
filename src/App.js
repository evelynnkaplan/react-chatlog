import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  let senders = [chatMessages[0].sender, chatMessages[1].sender];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between {senders[0]} and {senders[1]}</h1>
      </header>
      <main className="App-main">
        <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
