import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function Note(props){
  //on button click passing the onDelete function as a <Note/> prop, with the id of clicked item
  function delClicked(){
    props.onDelete(props.id);
  };

  return(
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Fab onClick={delClicked}>
          <DeleteIcon />
        </Fab>
      </div>
    </Zoom>
); //return
};// Note(props)

export default Note;
