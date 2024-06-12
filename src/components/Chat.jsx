import React from 'react';
import './Chat.css';
const whatsapp = require('../assets/chat.png');

const Chat = () => {
  return (
    <div class="chat">
      <a href="https://wa.me/553135194667" target="_blank">
        <img className="chat-icon" src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Chat;
