import { Button, FormLabel, Input, Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy";
import { Fab, Badge, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getTagData from "../utilities/getTagData";
import deleteTag from "../utilities/deleteTag";
import addTagData from "../utilities/addTagData";

const ViewTag = ({open, setOpen, tagId}) => {
  const tagData = getTagData(tagId);

  const[color, setColor] = useState();

  const[colorLabel, setColorLabel] = useState();

  const {handleSubmit, register, reset} = useForm();

  useEffect(() => {
    setColor(tagData.color);
    setColorLabel(tagData.colorLabel);
  }, [tagId]);

  const edit = (data) => {
    deleteTag(tagId);
    addTagData(tagData.x, tagData.y, color, colorLabel, data);
    setOpen(false);
    reset();
  };

  return(
    <Modal open={open} onClose={() => {setOpen(false); reset(); setColor(tagData.color); setColorLabel(tagData.colorLabel);}}>
      <ModalDialog>
        <ModalClose />
        <Stack spacing={2}>
          <Typography component="h2">View or edit this tag</Typography>
          <form onSubmit={handleSubmit(edit)}>
            <Stack spacing={2}>
              <FormLabel>Title:</FormLabel>
              <Input defaultValue={tagData.title} autoFocus required {...register("title")} />
              <FormLabel>Description:</FormLabel>
              <Input defaultValue={tagData.description} required {...register("description")} />
              <Stack direction="row" spacing={2}>
                <FormLabel>Pick a color for your tag:</FormLabel>
                <Badge badgeContent="" sx={{".MuiBadge-badge":{backgroundColor:color}}}>
                  <Chip label={colorLabel} />  
                </Badge>                         
              </Stack>
              <Stack direction="row" spacing={2}>
                <Fab onClick={() => {setColor("rgb(66, 133, 244)"); setColorLabel("Blue")}} size="small" sx={{backgroundColor:"rgb(66, 133, 244)", ":hover":{backgroundColor:"rgb(66, 133, 244)"}}} />
                <Fab onClick={() => {setColor("rgb(219, 68, 55)"); setColorLabel("Red")}} size="small" sx={{backgroundColor:"rgb(219, 68, 55)", ":hover":{backgroundColor:"rgb(219, 68, 55)"}}} />
                <Fab onClick={() => {setColor("rgb(244, 180, 0)"); setColorLabel("Yellow")}} size="small" sx={{backgroundColor:"rgb(244, 180, 0)", ":hover":{backgroundColor:"rgb(244, 180, 0)"}}} />
                <Fab onClick={() => {setColor("rgb(15, 157, 88)"); setColorLabel("Green")}} size="small" sx={{backgroundColor:"rgb(15, 157, 88)", ":hover":{backgroundColor:"rgb(15, 157, 88)"}}} />
              </Stack>
              <Stack direction="row" spacing={8} justifyContent="center">
                <Button type="submit" sx={{width: 80}}>Edit</Button>
                <Button onClick={() => {setOpen(false); reset(); setColor(tagData.color); setColorLabel(tagData.colorLabel);}} sx={{width: 80}}>Close</Button>
              </Stack>              
            </Stack>
          </form>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default ViewTag;