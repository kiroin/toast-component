import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import {ToastContext} from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const { toasts, addToast } = React.useContext(ToastContext);

  // [{id: aoifjio23209rui, variant: 'notice', message: 'hi'}, {variant: 'notice', message: 'hi'}]

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf></ToastShelf>

        <form className={styles.controlsWrapper} onSubmit={(event) => {
          event.preventDefault();
          addToast({variant: variant, message: message});
          setMessage('');
          setVariant('notice');
        }}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} onChange={(e) => {
                setMessage(e.target.value);
              }} value={message} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map(option => {
              let id = `variant-${option}`;
              return (
                <div
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  key={option}
                >
                  <label htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={() => setVariant(option)}
                    />
                    {option}
                  </label>
                </div>
              );
            })}

          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>

    </div>
  );
}

export default ToastPlayground;
