import React from 'react';
import styles from './ShadcnBlock.module.css';

interface ShadcnBlockProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const ShadcnBlock: React.FC<ShadcnBlockProps> = ({ 
  title = "Shadcnblocks.com", 
  subtitle = "2000+ extra Shadcn UI blocks",
  icon
}) => {
  return (
    <div className={styles.container}>
      {/* Cột 1: Icon/Logo */}
      <div className={styles.iconWrapper}>
        {icon || (
          <svg
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Cột 2: Text */}
      <div className={styles.textGroup}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ShadcnBlock;