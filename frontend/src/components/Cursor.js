import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            // Animate outer circle (lag effect)
            gsap.to(trailPosition, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Smooth lag
                onUpdate: () => setTrailPosition({ ...trailPosition }),
                immediateRender: false, // Prevents GSAP from caching initial values
            });
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [trailPosition]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "inner-circle", style: {
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%)`,
                } }), _jsx("div", { className: "outer-circle", style: {
                    left: `${trailPosition.x}px`,
                    top: `${trailPosition.y}px`,
                    transform: `translate(-50%, -50%)`,
                } })] }));
};
export default Cursor;
