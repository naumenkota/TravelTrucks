import s from "./Line.module.css";

export default function Line({ className }) {
  return <div className={className ? className : s.line}></div>;
}
