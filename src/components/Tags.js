import { Badge, Chip, ChipDelete } from "@mui/joy";
import { Fragment, useState } from "react";
import deleteTag from "../utilities/deleteTag";
import ViewTag from "./ViewTag";

const Tags = ({display, setDisplay}) => {
  const tags = JSON.parse(localStorage.getItem("tags")) || [];

  const [open, setOpen] = useState(false);

  const [badgeId, setBadgeId] = useState();

  const [tagId, setTagId] = useState();

const visibility = (id) => {
  if (id === badgeId) {
    return("flex");
  } else {
    return("none");
  }
};

  return(
    <Fragment>
    {tags.map((tag) => (
      <Badge key={tag.id} onMouseEnter={() => {setDisplay("block"); setBadgeId(tag.id);}}  onMouseLeave={()=>setBadgeId(null)} sx={{".css-1o5vpgw-JoyBadge-badge":{backgroundColor:tag.color}, position:"absolute", left:tag.x+"px", top:tag.y+"px", display: display}} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Chip onClick={() => {setOpen(true); setTagId(tag.id);}} variant="soft" color="neutral" endDecorator={<ChipDelete onDelete={() => {deleteTag(tag.id); setBadgeId(null);}} />} sx={{display: visibility(tag.id)}}>{tag.title}</Chip>
      </Badge>
    ))}
    <ViewTag open={open} setOpen={setOpen} tagId={tagId}  />
    </Fragment>
  );
};

export default Tags;
