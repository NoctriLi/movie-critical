import { useRef } from "react";

const AccordionItem = ({ movie, active, onToggle }:any) => {
  const { title, overview } = movie;

  const contentEl = useRef<HTMLInputElement>(null);

  return (
    <li  className={`border-t-2 ${active ? "active" : ""}`}>
      <button className="button cursor-pointer" onClick={onToggle}>
        More
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
    ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: "100%" }
            : { height: "0px" }
        }
      >
        <div className="answer">{overview}</div>
      </div>
    </li>
  );
};

export default AccordionItem;