import React, { useState } from 'react';
import style from './Card.module.css';
import logo from '../../assets/react.svg';
import Shuffle from '../Reactbits/Shuffle/Shuffle';
import GradientText from '../Reactbits/GradientText/GradientText';
interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    logoSrc?: string;
    onClick?: () => void;
    className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  children,
  onClick,
  className = '',
  logoSrc
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleDescription = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsExpanded(!isExpanded);
  };
  return (
    <div className={`${style.card} ${className}`} onClick={onClick}>
        <div className={style.cardHeader}>
            <GradientText 
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              className="custom-class"
              fontSize="1rem"
              showBorder={true} 
              >
              {title} 
            </GradientText>
            <h4 className={style.cardSubtitle}>{subtitle}</h4>
        </div>
        {isExpanded && (
            <div className={style.expandableContent}>
                {description && <p className={style.cardDescription}>{description}</p>}
                {children && <div className={style.cardContent}>{children}</div>}
            </div>
        )}
        {!isExpanded && (
            <div className={style.cardLogo}>
                <img src={logoSrc || logo} alt="Logo" />
            </div>
        )}
        <div className={style.cardFooter}>
            <button 
                className={style.cardButton} 
                onClick={handleToggleDescription}
            >
                {isExpanded ? 'Hide Details' : 'Description'}
            </button>
            <button className={style.cardButton} onClick={(e) => e.stopPropagation()}>
                Source
            </button>
        </div>
    </div>
  );
};

export default Card;