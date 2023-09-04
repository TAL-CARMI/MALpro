import { Input } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef } from "react";

const UserListInput = forwardRef(({}, ref) => {
  const usernameRef = useRef("");
  useImperativeHandle(ref, () => {
    return {
      getUsername: () => usernameRef.current.value,
    };
  });
  return (
    <Input inputRef={usernameRef} placeholder="Enter MAL Username"></Input>
  );
});

export default UserListInput;
