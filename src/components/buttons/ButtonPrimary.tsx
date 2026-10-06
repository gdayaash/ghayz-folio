import type { ButtonHTMLAttributes } from "react";

type PrimaryBtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryBtn({
  children,
  className,
  ...props
}: PrimaryBtnProps) {
  return (
    <button className={className ?? ""} {...props}>
      {children}
    </button>
  );
}
