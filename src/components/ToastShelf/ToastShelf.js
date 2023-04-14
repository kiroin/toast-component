import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext)
  function handleDismiss(id) {
    removeToast(id);
  }
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notifications">
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast id={toast.id} variant={toast.variant} handleDismiss={handleDismiss}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
