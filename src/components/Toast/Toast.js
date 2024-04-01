import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const STYLESCOLOR = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error,
};

function Toast({ children, type }) {
  const IconComponent = ICONS_BY_VARIANT[type];
  const toastClasses = STYLESCOLOR[type]
  return (
    <div className={`${styles.toast} ${toastClasses}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
