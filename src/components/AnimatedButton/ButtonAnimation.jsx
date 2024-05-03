import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from "./AnimatedButton.module.css"
import Magnetic from "../Magnetic/Magnetic";
import TextMagnetic from '../Magnetic/MenuTextMagnetic';

const ButtonAnimation = ({ text, classes, disabled, footer }) => {
    const [enter, setEnter] = useState("");

    return (
        <Magnetic>
            <button
                disabled={disabled}
                type='submit'
                onMouseEnter={() => setEnter("true")}
                onMouseLeave={() => setEnter("false")}
                className={`${footer && styles.footerBtn} ${styles.myButton} ${enter === "true" ? styles.hovered : enter === "false" && styles.out} ${classes}`}
            >
                <TextMagnetic>
                    <span>
                        {text}
                    </span>
                </TextMagnetic>
            </button>
        </Magnetic>
    );
};

export default ButtonAnimation;
