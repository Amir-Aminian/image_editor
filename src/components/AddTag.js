import { Button, FormLabel, Input, Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy";
import { useForm } from "react-hook-form";

const AddTag = ({open, setOpen, x, y}) => {
  const {handleSubmit, register} = useForm()
  const add = (data) => {
    let tags = JSON.parse(localStorage.getItem("tags")) || [];
    tags.push({x: x, y: y, id: `${x}`.concat(`${y}`), ...data})
    localStorage.setItem("tags", JSON.stringify(tags));
    setOpen(false);
  };

  return(
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <ModalClose />
        <Typography component="h2">Add a tag</Typography>
        <form onSubmit={handleSubmit(add)}>
          <Stack spacing={2}>
            <FormLabel>Title:</FormLabel>
            <Input autoFocus required {...register("title")} />
            <FormLabel>Description:</FormLabel>
            <Input required {...register("description")} />
            <Button type="submit">Add</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default AddTag;
