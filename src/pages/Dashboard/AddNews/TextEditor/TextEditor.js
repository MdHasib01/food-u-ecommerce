import JoditEditor from "jodit-react";
import React, { useRef } from "react";

const TextEditor = ({ setNewsDetails, config }) => {
  const editor = useRef(null);
  return (
    <div>
      <JoditEditor
        ref={editor}
        onChange={(content) => setNewsDetails(content)}
        config={config}
      ></JoditEditor>
    </div>
  );
};

export default TextEditor;
