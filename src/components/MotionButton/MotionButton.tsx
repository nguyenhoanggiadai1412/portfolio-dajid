import React from 'react'
import styles from "./MotionButton.module.css"
interface MotionButotnProps {
    // frontText: string,
    // backText: string,
    // url?: string,
    // defaultColor?: string,
    // hoverColor?: string,
    // onClick?: () => void,
}

function MotionButton(props: MotionButotnProps) {
    const {} = props

    return (
        <div className={styles.frame}>
            <div>Hello</div>
            <div className={styles.dot}>
                
            </div>
        </div>
    )
}

export default MotionButton
