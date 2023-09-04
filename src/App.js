import React, { useState, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8081/websocket');

    newSocket.onopen = () => {
      console.log('Server connected!');
    };

    newSocket.onerror = (error) => {
      console.log(error);
    };

    newSocket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    setSocket(newSocket);

    return () => {
      // Clean up WebSocket connection when the component unmounts
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    socket.send(message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="보낼 메세지를 입력하세요."
        className="content"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" value="전송" className="sendBtn" onClick={sendMessage}>
        전송
      </button>
      <div>
        <span>메세지</span>
        <div className="msgArea">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
