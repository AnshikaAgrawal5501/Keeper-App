import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

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

  function submitNote(event) {
    props.addButton(title, content);
    typeTitle("");
    typeContent("");
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {
        isExpanded ? <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={typingTitle}
        /> : null
        }
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={content}
          onChange={typingContent}
          onClick={expand}
        />
        
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
