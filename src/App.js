import React from 'react';
import './style.css';

const sampleMessages = [
  { id: 1, message: 'hi', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  { id: 2, message: 'hello', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 3,
    message: 'how are you',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 3, message: 'fine', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 4,
    message: 'sounds good',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 1, message: 'hi', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  { id: 2, message: 'hello', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 3,
    message: 'how are you',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 3, message: 'fine', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 4,
    message: 'sounds good',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 1, message: 'hi', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  { id: 2, message: 'hello', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 3,
    message: 'how are you',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 3, message: 'fine', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 4,
    message: 'sounds good',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
];

const newMessageSet = [
  { id: 1, message: 'new hi', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  { id: 2, message: 'new hello', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 3,
    message: 'new how are you',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
  { id: 3, message: 'fine', sentBy: 'Dinesh', time: '20/2/2022 23:34:59' },
  {
    id: 4,
    message: 'new sounds good',
    sentBy: 'Dinesh',
    time: '20/2/2022 23:34:59',
  },
];

export default function App() {
  const [messages, postMessage] = React.useState(sampleMessages);
  const [newMessage, setNewMessage] = React.useState('');
  const onTextAreaChange = (e) => {
    let newMessage = [{ id: '5', message: e.target.value, time: new Date() }];
    setNewMessage(newMessage);
  };

  const sendMessge = () => {
    postMessage([...messages, ...newMessage]);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop !=
      document.documentElement.offsetHeight
    ) {
      return;
    }
    postMessage([...messages, ...newMessageSet]);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={'container'}>
      {messages.map((val, i) => {
        return (
          <div key={val + i} className={'chatContainer'}>
            <div key={val + i} className={'chat'}>
              <span>{val.message}</span>
            </div>
          </div>
        );
      })}
      <div className={'sendMessageSection'}>
        <textarea onChange={onTextAreaChange}></textarea>
        <button onClick={sendMessge}>Send</button>
      </div>
    </div>
  );
}
