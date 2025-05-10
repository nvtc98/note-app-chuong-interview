import Toast from '@/components/Toast';
import {createContext, PropsWithChildren, useContext, useState} from 'react';

const timeoutToast = 2000;

export const ToastContext = createContext<{
  toastTitle: string;
  onShowToast: (title: string, timeout?: number) => void;
}>({
  toastTitle: '',
  onShowToast: () => {},
});

export const ToastProvider = ({children}: PropsWithChildren<{}>) => {
  const [toastTitle, setToastTitle] = useState<string>('');

  const onShowToast = (title: string, timeout = timeoutToast) => {
    if (toastTitle) {
      return;
    }
    setToastTitle(title);
    setTimeout(() => {
      setToastTitle('');
    }, timeout);
  };

  return (
    <ToastContext.Provider value={{toastTitle, onShowToast}}>
      {children}
      <Toast show={!!toastTitle} title={toastTitle} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
