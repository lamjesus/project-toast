import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  //! TODO: CustomHook
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("notice");
  const [shown, setShown] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {shown && <Toast type={inputValue}>{value}</Toast>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={handleChange}
              value={value}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS &&
              VARIANT_OPTIONS.map((variantSelected, idx) => {
                return (
                  <label key={idx} htmlFor={`variant-${variantSelected}`}>
                    <input
                      id={`variant-${variantSelected}`}
                      type="radio"
                      name={variantSelected}
                      value={variantSelected}
                      checked={inputValue === variantSelected}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    {variantSelected}
                  </label>
                );
              })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setShown(!shown)}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
