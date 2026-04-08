import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the cursor follower and tail
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  
  // Tail springs
  const tailX1 = useSpring(0, { damping: 20, stiffness: 250 });
  const tailY1 = useSpring(0, { damping: 20, stiffness: 250 });
  const tailX2 = useSpring(0, { damping: 30, stiffness: 180 });
  const tailY2 = useSpring(0, { damping: 30, stiffness: 180 });
  const tailX3 = useSpring(0, { damping: 40, stiffness: 120 });
  const tailY3 = useSpring(0, { damping: 40, stiffness: 120 });
  const tailX4 = useSpring(0, { damping: 50, stiffness: 80 });
  const tailY4 = useSpring(0, { damping: 50, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      tailX1.set(e.clientX);
      tailY1.set(e.clientY);
      tailX2.set(e.clientX);
      tailY2.set(e.clientY);
      tailX3.set(e.clientX);
      tailY3.set(e.clientY);
      tailX4.set(e.clientX);
      tailY4.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest(".interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Follower Ring */}
      <motion.div
        className="absolute w-10 h-10 border border-white/40 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      />

      {/* Smooth Trailing Line */}
      <svg className="fixed inset-0 pointer-events-none z-[9998] w-full h-full">
        <motion.path
          d={useTransform(
            [cursorX, cursorY, tailX1, tailY1, tailX2, tailY2, tailX3, tailY3, tailX4, tailY4],
            (v: any) => {
              const vals = v as number[];
              // Generate a smooth curve through the points
              return `M ${vals[0]} ${vals[1]} 
                      Q ${(vals[0]+vals[2])/2} ${(vals[1]+vals[3])/2} ${vals[2]} ${vals[3]} 
                      T ${vals[4]} ${vals[5]} 
                      T ${vals[6]} ${vals[7]} 
                      T ${vals[8]} ${vals[9]}`;
            }
          )}
          fill="none"
          stroke="#FDE3C6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: isHovering ? 0 : 1 }}
        />
      </svg>

      {/* Center Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-white rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
