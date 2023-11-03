"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        {/* <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot> */}
        <TextField.Input placeholder="Title" />
      </TextField.Root>

      <SimpleMDE placeholder="Description" />

      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
