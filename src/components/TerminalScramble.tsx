import React, { useEffect, useState, useRef } from "react";

interface TerminalScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  autoStart?: boolean;
  characters?: string;
  speed?: number;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#01";

export const TerminalScramble: React.FC<TerminalScrambleProps> = ({
  text,
  className = "",
  triggerOnHover = true,
  autoStart = false,
  characters = DEFAULT_CHARS,
  speed = 30,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  const iterationRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const startScramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;
    iterationRef.current = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterationRef.current) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iterationRef.current >= text.length) {
        clearInterval(interval);
        isScrambling.current = false;
        setDisplayText(text);
      }

      iterationRef.current += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    if (autoStart) {
      startScramble();
    } else {
      setDisplayText(text);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, autoStart]);

  return (
    <span
      className={className}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </span>
  );
};

export default TerminalScramble;
