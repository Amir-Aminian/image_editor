import test from './test.png';
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
    const element = document.getElementById("image");
    const x = element.getBoundingClientRect().x;
    const y = element.getBoundingClientRect().y;   
    setX(e.clientX-x);
    setY(e.clientY-y);
    setOpen(true);    
  };

  return (
    <Fragment>
      <Sheet sx={{width:"100%", height:"100%", position:"relative", display:"inline-flex"}}>
        <img id="image" src={test} onMouseEnter={()=>setDisplay("block")} onMouseLeave={()=>setDisplay("none")} onClick={(e)=>addTag(e)} style={{display:"block", margin:"auto", maxHeight:"100%", maxWidth:"100%"}} alt="core_image" />
      </Sheet>
      <AddTag open={open} setOpen={setOpen} x={x} y={y} />
      <Tags display={display} setDisplay={setDisplay} />
    </Fragment>
  );
};

export default App;
