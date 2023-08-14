import { Link } from "react-router-dom";

const backArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 12L20 12M11 5L4 12L11 19"
      stroke="#26262E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function StandarHeader({ text, url }) {
  return (
    <nav className="flex absolute w-full justify-between p-4 pt-8 text-xl font-semibold items-center ">
      <Link to={url}>
        <span className="scale-150">{backArrow}</span>
      </Link>
      <span>{text}</span>
      <span></span>
    </nav>
  );
}

export default StandarHeader;
