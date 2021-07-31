import React,{useState} from "react";

function CreateArea(props) {
  const [title, typeTitle] = useState("");
  const [content, typeContent] = React.useState("");

  function typingTitle(event) {
    const title = event.target.value;
    typeTitle(title);
  }

  function typingContent(event) {
    const content = event.target.value;
    typeContent(content);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={typingTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={typingContent}
        />
        <button
          onClick={(event) => {
            props.addButton(title, content);
            typeTitle("");
            typeContent("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
