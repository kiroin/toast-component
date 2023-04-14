import React from "react";
import useKeydown from "../../hooks/use-keydown"

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((nextToast) => {
    let nextToasts = [
      ...toasts,
      {
        variant: nextToast.variant,
        message: nextToast.message,
        id: crypto.randomUUID()
      }
    ];
    setToasts(nextToasts);
  }, [toasts]);

  const removeToast = React.useCallback((id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }, [toasts]);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  const handleEscape = React.useCallback(()=> {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleEscape);


  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, dismissAll }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
