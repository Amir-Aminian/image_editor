import { Button, FormLabel, Input, Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy";
import { Fab, Badge, Chip } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddTag = ({open, setOpen, x, y}) => {
  const[color, setColor] = useState("rgb(66, 133, 244)");

  const[colorLabel, setColorLabel] = useState("Blue");

  const {handleSubmit, register, reset} = useForm();

  const add = (data) => {
    let tags = JSON.parse(localStorage.getItem("tags")) || [];
    tags.push({id: `${x}`.concat(`${y}`), x: x, y: y, color: color, colorLabel: colorLabel, ...data});
    localStorage.setItem("tags", JSON.stringify(tags));
    setOpen(false);
    reset();
  };

  return(
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <ModalClose />
        <Stack spacing={2}>
          <Typography component="h2">Add a tag</Typography>
          <form onSubmit={handleSubmit(add)}>
            <Stack spacing={2}>
              <FormLabel>Title:</FormLabel>
              <Input autoFocus required {...register("title")} />
              <FormLabel>Description:</FormLabel>
              <Input required {...register("description")} />
              <Stack direction="row" spacing={2}>
                <FormLabel>Pick a color for your tag:</FormLabel>
                <Badge badgeContent="" sx={{"& .MuiBadge-badge":{backgroundColor:color}}}>
                  <Chip label={colorLabel} />  
                </Badge>                         
              </Stack>
              <Stack direction="row" spacing={2}>
                <Fab onClick={() => {setColor("rgb(66, 133, 244)"); setColorLabel("Blue")}} size="small" sx={{backgroundColor:"rgb(66, 133, 244)", ":hover":{backgroundColor:"rgb(66, 133, 244)"}}} />
                <Fab onClick={() => {setColor("rgb(219, 68, 55)"); setColorLabel("Red")}} size="small" sx={{backgroundColor:"rgb(219, 68, 55)", ":hover":{backgroundColor:"rgb(219, 68, 55)"}}} />
                <Fab onClick={() => {setColor("rgb(244, 180, 0)"); setColorLabel("Yellow")}} size="small" sx={{backgroundColor:"rgb(244, 180, 0)", ":hover":{backgroundColor:"rgb(244, 180, 0)"}}} />
                <Fab onClick={() => {setColor("rgb(15, 157, 88)"); setColorLabel("Green")}} size="small" sx={{backgroundColor:"rgb(15, 157, 88)", ":hover":{backgroundColor:"rgb(15, 157, 88)"}}} />
              </Stack>
              <Button type="submit">Add</Button>
            </Stack>
          </form>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default AddTag;
