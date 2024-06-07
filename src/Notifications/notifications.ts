import { toast } from 'react-hot-toast';

export const SuccessNotification = (message: string) => {
  toast.success(message, {
    style: {
      direction: 'ltr',
    },
    position: 'bottom-right',
    duration: 4500,
  });
};
export const ErrorNotification = (message: string) => {
  toast.error(message, {
    style: {
      direction: 'ltr',
    },
    position: 'bottom-right',
    duration: 4500,
  });
};
