import image from './image.jpg';
import { Fragment, useState } from 'react';
import AddTag from './components/AddTag';
import Tags from './components/Tags';
import { Sheet } from '@mui/joy';

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
      <Sheet sx={{width:"800px", height:"400px", position:"relative", display:"inline-flex"}}>
        <img src={image} onMouseEnter={()=>setDisplay("block")} onMouseLeave={()=>setDisplay("none")} onClick={(e)=>addTag(e)} style={{display:"block", margin:"auto", maxHeight:"100%", maxWidth:"100%"}} alt="core_image" />
      </Sheet>
      <AddTag open={open} setOpen={setOpen} x={x} y={y} />
      <Tags display={display} setDisplay={setDisplay} />
    </Fragment>
  );
};

export default App;
