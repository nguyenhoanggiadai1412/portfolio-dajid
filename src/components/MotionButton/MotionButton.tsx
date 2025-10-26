import React from 'react'
import styles from "./MotionButton.module.css"
interface MotionButotnProps {
    frontText: string,
    backText: string,
    // url?: string,
    defaultColor?: string,
    hoverColor?: string,
    // onClick?: () => void,
}

function MotionButton(props: MotionButotnProps) {
    const {} = props;

    return (
      <div className={styles.frame}
        style={{
          '--default-color': props.defaultColor || '#3498db',
          '--hover-color': props.hoverColor || '#2980b9',
        } as React.CSSProperties}>
        <div className={styles.background}>
          <span></span>
          <span></span>
        </div>

        <div className={styles.circle}></div>

        <div className={styles.content}> 
          <div className={styles.text}>
            {props.frontText}
          </div>
          <div className={styles.text }>
            {props.backText}
          </div>
        </div>
      </div>
    )
}

export default MotionButton
