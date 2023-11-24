// import React, {useState} from 'react';
// import EmojiPicker, { Emoji } from 'emoji-picker-react';
// import './App.css';

// function App() {
//   const [selectedEmoji, setSelectedEmoji] = useState("");

//   const clickMe = (emojiData) => {
//     setSelectedEmoji(emojiData.unified);
//   }
//   return (
//     <div>
//       <h2>Emoji App</h2>
//       <div>
// {selectedEmoji ? <Emoji unified = {selectedEmoji} size={62} /> : null}
//       </div>
//    <EmojiPicker onEmojiClick={clickMe}/>
//    <div>{selectedEmoji}</div>
//     </div>
//   );
// }

// export default App;

///////// Emoji App /////////

import React, {useEffect, useState} from 'react';
import './App.css';
import EmojiPicker from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [choosenEmoji, setChoosenEmoji] = useState('');

  const copyEmojiFunction = (text) => {
const textArea = document.createElement('textarea');
textArea.value = text;
document.body.appendChild(textArea);
textArea.select();
document.body.removeChild(textArea);
  }
  const emojiPickerFunction = (emojiObject) => {
const emoji = emojiObject.emoji;
setChoosenEmoji(emoji);
copyEmojiFunction(emoji);
toast.success('Copied to Clipcboard!', {
  position:'top-right',
  autoClose:'4000',
  hideProgessbar:true,
  closeOnClick:true,
  pauseOnHover: false,
  daggable:false,
  progress:undefined
})
  }

  return (
<div className="emoji-app">
  <h1>Emoji APP</h1>
  {choosenEmoji && 
  (
    <div className="selected-emoji">
      <p>Selected emoji: </p>
      <span>{choosenEmoji}</span>
    </div>
  )}
  <div className="emoji-picker">
    <EmojiPicker onEmojiClick={emojiPickerFunction}/>
  </div>
  <ToastContainer />
</div>
  )
}
export default App;