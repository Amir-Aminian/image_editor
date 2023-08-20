import { Badge, Chip, ChipDelete } from "@mui/joy";
import { Fragment, useEffect, useState } from "react";
import deleteTag from "../utilities/deleteTag";
import ViewTag from "./ViewTag";

const Tags = ({display, setDisplay}) => {
  const tags = JSON.parse(localStorage.getItem("tags")) || [];

  const [open, setOpen] = useState(false);

  const [badgeId, setBadgeId] = useState();

  const [tagId, setTagId] = useState();

  const [newX, setNewX] = useState();

  const [newY, setNewY] = useState();

const visibility = (id) => {
  if (id === badgeId) {
    return("flex");
  } else {
    return("none");
  }
};

const getDim = (e) => {
  const element = document.getElementById("image");
  setNewX(element.getBoundingClientRect().x);
  setNewY(element.getBoundingClientRect().y);     
};

useEffect(() => {
  getDim();
})

  return(
    <Fragment>
    {tags.map((tag) => (
      <Badge key={tag.id} onMouseEnter={() => {setDisplay("block"); setBadgeId(tag.id);}}  onMouseLeave={()=>setBadgeId(null)} sx={{".MuiBadge-badge":{backgroundColor:tag.color}, position:"absolute", left:tag.x+newX+"px", top:tag.y+newY+"px", display: display}} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Chip onClick={() => {setOpen(true); setTagId(tag.id);}} variant="soft" color="neutral" endDecorator={<ChipDelete onDelete={() => {deleteTag(tag.id); setBadgeId(null);}} />} sx={{display: visibility(tag.id)}}>{tag.title}</Chip>
      </Badge>
    ))}
    <ViewTag open={open} setOpen={setOpen} tagId={tagId}  />
    </Fragment>
  );
};

export default Tags;
