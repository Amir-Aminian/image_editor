import { Badge, Chip, ChipDelete } from "@mui/joy";

const ShowTags = ({display}) => {
  let tags=JSON.parse(localStorage.getItem("tags")) || [];
  return(
    tags.map((tag) => (
      <Badge sx={{position:"absolute", left:tag.x+"px", top:tag.y+"px", display:{display}}} anchorOrigin={{vertical: 'top', horizontal: 'left'}} color="danger">
        <Chip variant="soft" color="danger" endDecorator={<ChipDelete onDelete={() => alert('Tag delete')} />}>{tag.title}</Chip>
      </Badge>
    ))
  );
};

export default ShowTags;
