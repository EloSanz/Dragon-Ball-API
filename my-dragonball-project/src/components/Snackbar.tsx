// src/components/Snackbar.tsx
import React from 'react';
import styles from './styles/Snackbar.module.css';

interface SnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.snackbar}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>×</button>
    </div>
  );
};

export default Snackbar;
