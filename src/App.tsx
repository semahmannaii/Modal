import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setModal] = useState(false)

  return (
    <div>
      <button className="modal" onClick={() => setModal(true)}>Click Me!</button>
      <Modal showModal={showModal} onClose={() => setModal(false)} />
    </div>
  );
}

export default App;
