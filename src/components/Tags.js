import { Badge, Chip, ChipDelete } from "@mui/joy";
import { useState } from "react";

const Tags = ({display, setDisplay}) => {
  let tags=JSON.parse(localStorage.getItem("tags")) || [];

  const [chip, setChip] = useState();

const visibility = (id) => {
  if (id === chip) {
    return("flex");
  } else {
    return("none");
  }
};

  return(
    tags.map((tag) => (
      <Badge key={tag.id} onMouseEnter={(e) => {setDisplay("block"); setChip(tag.id)}}  onMouseLeave={()=>setChip(null)} sx={{position:"absolute", left:tag.x+"px", top:tag.y+"px", display: display}} anchorOrigin={{vertical: 'top', horizontal: 'left'}} color="danger">
        <Chip variant="soft" color="danger" endDecorator={<ChipDelete onDelete={() => alert('Tag delete')} />} sx={{display: visibility(tag.id)}}>{tag.title}</Chip>
      </Badge>
    ))
  );
};

export default Tags;
