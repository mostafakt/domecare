import { Visibility } from '@mui/icons-material';
import './style.css';
import {
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
  FilledInputProps,
} from '@mui/material';
import React from 'react';
import InputAdornment from './InputAdornment/InputAdornment';

interface FilledInputPropsExtended extends FilledInputProps {
  label?: string;
  error?: boolean;
  startIcon?: JSX.Element;
  containerWidth?: string;
}
const InputWithLogo = (props: FilledInputPropsExtended) => {
  return (
    <div
      className={`flex gap-5 items-center   shadow-md rounded-lg  border-solid border-[1px] bg-white ${props.containerWidth} ${props.error && 'border-solid border-[1px] !border-red-500 '}`}
    >
      {props.startIcon}
      <FormControl className="w-full" variant="filled">
        {props.label && (
          <InputLabel
            className={` ${props.error ? 'text-error' : 'text-gray-400 '}`}
            htmlFor={`filled-adornment-${props.label}`}
          >
            {props.label}
          </InputLabel>
        )}
        <FilledInput
          {...props}
          className={` bg-background-components-input rounded-lg  ${props.className}  `}
        />
      </FormControl>
    </div>
  );
};

export default InputWithLogo;
