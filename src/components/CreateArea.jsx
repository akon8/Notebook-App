import React, {useState} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props){
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content:""
  });

  function changed(ev){
    const {name, value} = ev.target;
      setNote((prev) => {
      return (
        {
          ...prev,
          [name]: value
        }
      ) //return
      }); //setNote
  };// changed

  function subm(ev){
    if (note.title !== "" || note.content !== ""){
  props.onAdd(note); 
  setNote({
    title: "",
    content:""
  }); //setNote
  }
  ev.preventDefault(); //preventing default form reset behaviour
  }

  function expand(){
    setExpanded(true);
  }

  return (//if textarea is focused render "title" input and add rows
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
          name="title"
          onChange={changed}
          value={note.title}
          placeholder="Title"
          />
        ) : null}

        <textarea
        name="content"
        onChange={changed}
        value={note.content}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        onFocus={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={subm}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );//return
} //CreateArea(props)

export default CreateArea;
