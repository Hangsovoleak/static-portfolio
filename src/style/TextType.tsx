import { useEffect, useMemo, useRef, useState } from "react";

interface TextTypeProps {
  text?: string | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
}

function TextType({
  text = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
  variableSpeedEnabled = false,
  variableSpeedMin = 50,
  variableSpeedMax = 100,
}: TextTypeProps) {
  const words = useMemo(() => {
    if (Array.isArray(text)) return text.filter(Boolean);
    return text ? [String(text)] : [];
  }, [text]);

  const getTypingSpeed = () => {
    if (!variableSpeedEnabled) return typingSpeed;

    const min = Math.max(1, variableSpeedMin);
    const max = Math.max(min, variableSpeedMax);
    const range = max - min;
    return range > 0 ? Math.floor(Math.random() * (range + 1)) + min : min;
  };

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words.length) return undefined;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && displayText.length < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, getTypingSpeed());
      return () => clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && displayText.length === currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeoutRef.current);
    }

    if (isDeleting && displayText.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeoutRef.current);
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return undefined;
  }, [
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    wordIndex,
    words,
  ]);

  if (!words.length) return null;

  return (
    <span>
      {displayText}
      {showCursor ? (
        <span
          aria-hidden="true"
          style={{
            animation: `text-type-blink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      ) : null}
      <style>
        {`@keyframes text-type-blink { 50% { opacity: 0; } }`}
      </style>
    </span>
  );
}

export default TextType;
