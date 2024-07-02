import { useEffect, useRef } from "react";
import Typed from "typed.js";

type TypedJSProps = {
  strings: string[];
  loop?: boolean;
  speed?: number;
  disableCursor?: boolean;
};

export default function TypedJS({
  strings,
  loop = false,
  speed = 30,
  disableCursor = false,
}: TypedJSProps) {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: speed,
      backSpeed: 50,
      loop,
      showCursor: !disableCursor,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, loop, speed, disableCursor]);

  return <span ref={el} />;
}
