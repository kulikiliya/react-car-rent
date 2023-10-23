// icon:sword | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconSword(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="4em"
      width="4em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 4v5l-9 7-4 4-3-3 4-4 7-9zM6.5 11.5l6 6" />
    </svg>
  );
}

export default IconSword;
