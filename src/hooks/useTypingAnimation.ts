import { useState, useEffect } from 'react';

/**
 * Animates a string character by character.
 * @param text  The full string to type out.
 * @param speed Milliseconds per character (default 75).
 * @param delay Milliseconds to wait before starting (default 0).
 */
const useTypingAnimation = (text: string, speed = 75, delay = 0): { typed: string; done: boolean } => {
  const [typed, setTyped] = useState('');
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (typed.length >= text.length) return;
    const t = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [typed, text, speed, started]);

  return { typed, done: typed.length === text.length };
};

export default useTypingAnimation;
