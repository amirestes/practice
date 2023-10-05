import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [documentTitle, setDocumentTitle] = useState("");

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  const handleTitleChange = (e) => {
    setDocumentTitle(e.target.value);
  };

  return (
    <div className="App">
      <label htmlFor="title-input">
        Type in the input and look at the browser tab!
      </label>
      <input
        id="title-input"
        type="text"
        maxLength={25}
        value={documentTitle}
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default App;
