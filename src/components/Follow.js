import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FollowCursorButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = document.querySelector(".container");

        const onMouseMove = (e) => {
            // Calculate the limited position based on the parent container's size
            const containerRect = container.getBoundingClientRect();
            const limitedX = Math.min(Math.max(e.clientX - containerRect.left, 0), containerRect.width);
            const limitedY = Math.min(Math.max(e.clientY - containerRect.top, 0), containerRect.height);

            setPosition({ x: limitedX, y: limitedY });
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="container" style={{ width: "200px", height: "100px", position: "relative" }}>
            <motion.button
                // style={{
                //     position: "absolute",
                //     left: position.x + "px",
                //     top: position.y + "px",
                // }}
                animate={{ x: position.x, y: position.y, opacity: 1 }}
            >
                Follow Cursor Button
            </motion.button>
        </div>
    );
};

export default FollowCursorButton;
