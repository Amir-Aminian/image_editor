import image from './image.jpg';
import { Fragment, useState } from 'react';
import AddTag from './AddTag';
import ShowTags from './ShowTags';

function App() {
  const [open, setOpen] = useState(false);

  const [display, setDisplay] = useState("none")

  const [x, setX] = useState();

  const [y, setY] = useState();

  const addTag = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    setOpen(true);    
  };

  return (
    <Fragment>
      <img src={image} onMouseEnter={()=>setDisplay("block")} onMouseLeave={()=>setDisplay("none")} onClick={(e)=>addTag(e)} style={{display:"block", margin:"auto", maxHeight:"100%", maxWidth:"100%"}} alt="core_image" />
      <AddTag open={open} setOpen={setOpen} x={x} y={y} />
      <ShowTags display={display} />
    </Fragment>
  );
};

export default App;
