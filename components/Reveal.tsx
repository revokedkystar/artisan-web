"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "mask";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
} & Record<string, unknown>;

/**
 * Fades/slides its children into view the first time they enter the viewport.
 * Animation styles live in globals.css under [data-reveal].
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    // A fully clipped element never reports as intersecting, so watch its parent instead.
    observer.observe(variant === "mask" && el.parentElement ? el.parentElement : el);
    return () => observer.disconnect();
  }, [variant]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
