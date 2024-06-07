import { ButtonProps } from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';

interface IProps extends ButtonProps {
  content: string;
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  loading?: boolean;
}
const Button = (props: IProps) => {
  return (
    <LoadingButton
      loading={props.loading}
      variant={props.variant ?? 'contained'}
      {...props}
      className={` rounded-lg h-[50px] border-primary ${props.variant == 'outlined' ? '' : 'bg-primary'} ${props.className}`}
    >
      {props.content}
    </LoadingButton>
  );
};

export default Button;
