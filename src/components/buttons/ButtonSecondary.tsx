import type { ButtonHTMLAttributes } from "react";

type SecondaryBtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryBtn({
  children,
  className,
  ...props
}: SecondaryBtnProps) {
  return (
    <button className={className ?? ""} {...props}>
      {children}
    </button>
  );
}
