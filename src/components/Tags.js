import { Badge, Chip, ChipDelete } from "@mui/joy";
import { useState } from "react";
import deleteTag from "../utilities/deleteTag";

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
      <Badge key={tag.id} onMouseEnter={() => {setDisplay("block"); setChip(tag.id)}}  onMouseLeave={()=>setChip(null)} sx={{".css-1o5vpgw-JoyBadge-badge":{backgroundColor:tag.color}, position:"absolute", left:tag.x+"px", top:tag.y+"px", display: display}} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Chip variant="soft" color="neutral" endDecorator={<ChipDelete onDelete={() => {deleteTag(tag.id); setChip(null);}} />} sx={{display: visibility(tag.id)}}>{tag.title}</Chip>
      </Badge>
    ))
  );
};

export default Tags;
