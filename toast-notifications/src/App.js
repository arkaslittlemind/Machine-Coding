import React from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';


// toast.configure();
function App() {

  // const notify = () => {
  //   toast("Post uploaded successfully!")
  // }

  const notify = () => {
    toast('Post uploaded successfully!', { icon: '🚀'});
  }

  return (
    <div className="App">
      <button className="notif-btn" onClick={notify}>Notify!</button>
      <Toaster />
    </div>
  );
}

export default App;
