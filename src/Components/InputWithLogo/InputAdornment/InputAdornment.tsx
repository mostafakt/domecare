import { IconButton, InputAdornment as MuiInputAdornment } from '@mui/material';
import React, { ReactElement } from 'react';
interface IProps {
  position: 'end' | 'start';
  children: JSX.Element;
  onClick?: () => void;
}
const InputAdornment = (props: IProps) => {
  return (
    <MuiInputAdornment onClick={props.onClick} position={props.position}>
      <IconButton edge="end">{props.children}</IconButton>
    </MuiInputAdornment>
  );
};

export default InputAdornment;
