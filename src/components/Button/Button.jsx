import clsx from "clsx";
import s from "./Button.module.css";

export default function Button({
  children,
  onClick,
  className,
  load = false,
  type = "button",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(s.btn, load && s.btnLoad, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
