import React from 'react';

const LinkSvg = ({ style }: { style: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={style}
      fill="#a4afb7"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_2809"
            data-name="Rectangle 2809"
            width="24"
            height="24"
            transform="translate(0.013)"
          />
        </clipPath>
      </defs>
      <g
        id="Mask_Group_35"
        data-name="Mask Group 35"
        transform="translate(-0.013)"
        clip-path="url(#clip-path)"
      >
        <g id="link" transform="translate(2.175 1.991)">
          <path
            id="Path_6128"
            data-name="Path 6128"
            d="M178.61,12.818a.9.9,0,0,1-.637-1.539l1.822-1.822a4.322,4.322,0,0,0,1.287-3.1A4.388,4.388,0,0,0,176.7,1.979,4.322,4.322,0,0,0,173.6,3.263l-1.824,1.824a.9.9,0,1,1-1.275-1.275l1.822-1.822A6.114,6.114,0,0,1,176.7.176a6.193,6.193,0,0,1,6.186,6.186,6.11,6.11,0,0,1-1.819,4.374l-1.819,1.818a.9.9,0,0,1-.637.264Zm0,0"
            transform="translate(-163.209 -0.004)"
          />
          <path
            id="Path_6129"
            data-name="Path 6129"
            d="M6.19,183.056A6.193,6.193,0,0,1,0,176.87,6.11,6.11,0,0,1,1.823,172.5l1.819-1.818a.9.9,0,1,1,1.275,1.275L3.1,173.774a4.319,4.319,0,0,0-1.288,3.1,4.388,4.388,0,0,0,4.383,4.383,4.322,4.322,0,0,0,3.093-1.284l1.824-1.824a.9.9,0,0,1,1.275,1.275l-1.822,1.823a6.114,6.114,0,0,1-4.371,1.814Zm0,0"
            transform="translate(-0.004 -163.209)"
          />
          <path
            id="Path_6130"
            data-name="Path 6130"
            d="M259.463,131.671a.9.9,0,0,1-.638-1.539l1.7-1.7a.9.9,0,1,1,1.275,1.275l-1.7,1.7A.9.9,0,0,1,259.463,131.671Zm0,0"
            transform="translate(-247.741 -122.643)"
          />
          <path
            id="Path_6131"
            data-name="Path 6131"
            d="M128.9,262.233a.9.9,0,0,1-.638-1.539l1.7-1.7a.9.9,0,0,1,1.275,1.275l-1.7,1.7A.9.9,0,0,1,128.9,262.233Zm0,0"
            transform="translate(-122.644 -247.742)"
          />
          <path
            id="Path_6132"
            data-name="Path 6132"
            d="M18.781,19.847a.892.892,0,0,1-.632-.262L.263,1.7A.894.894,0,1,1,1.527.434L19.413,18.32a.894.894,0,0,1-.632,1.527Zm0,0"
            transform="translate(0)"
          />
        </g>
      </g>
    </svg>
  );
};
const EditSvg = ({ style }: { style: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={style}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_17439"
            data-name="Rectangle 17439"
            width="24"
            height="24"
            transform="translate(-0.163)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="ic_edite" transform="translate(0.163)" clip-path="url(#clip-path)">
        <g id="ic_edite-2" data-name="ic_edite" transform="translate(3.75 4.5)">
          <path
            id="Path_5387"
            data-name="Path 5387"
            d="M9.64,3.863l3.153,3.153L4.811,15,1.66,11.846ZM15.187,3.1,13.78,1.7a1.4,1.4,0,0,0-1.971,0L10.462,3.043,13.615,6.2l1.571-1.571A1.075,1.075,0,0,0,15.187,3.1ZM.009,16.278a.359.359,0,0,0,.434.427l3.514-.852L.806,12.7Z"
            transform="translate(-0.001 -1.289)"
            fill="#a4afb7"
          />
        </g>
      </g>
    </svg>
  );
};

export { LinkSvg, EditSvg };
