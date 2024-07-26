"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import React from "react";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>

      <SimpleMDE placeholder="Description" />

      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
