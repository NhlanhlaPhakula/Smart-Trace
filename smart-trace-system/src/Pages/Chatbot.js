import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './Config';

const ChatBot = () => {
    return(
        <div className="chatbot">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}  />
        </div>
    );
};
export default ChatBot;