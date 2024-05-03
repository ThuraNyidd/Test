import { useState } from 'react';
import styles from "./FloatingBtn.module.css"
import Magnetic from "../Magnetic/Magnetic";
import TextMagnetic from '../Magnetic/MenuTextMagnetic';
import { Icon } from "@iconify/react";

const FloatingBtn = ({ text, classes, disabled, footer, onClick, careers }) => {
    const [enter, setEnter] = useState("");

    return (
        <Magnetic>
            <button
                onClick={onClick}
                disabled={disabled}
                type='submit'
                onMouseEnter={() => setEnter("true")}
                onMouseLeave={() => setEnter("false")}
                className={`${footer && styles.footerBtn} ${styles.myButton} ${enter === "true" ? styles.hovered : enter === "false" && styles.out} ${classes}`}
            >
                <TextMagnetic>
                    <div className='flex gap-1 items-center'>
                        <span>{text}</span>
                        <Icon icon={careers ? "bi:upload" : "quill:send"} />
                    </div>
                </TextMagnetic>
            </button>
        </Magnetic>
    );
};

export default FloatingBtn;
