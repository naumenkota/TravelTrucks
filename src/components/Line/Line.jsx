import s from "./Line.module.css";

export default function Line({ width = "100%" }) {
  return (
    <div
      className={s.line}
      style={{
        width,
      }}
    />
  );
}
