const DownRightArrow = ({ color = '#9474df', size = "24", style }) => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path style={{filter: "drop-shadow(0px 0px 1px #9474df)"}} d="M7 7 L17 7 L17 17" />
    <path style={{filter: "drop-shadow(0px 0px 1px #9474df)"}} d="M7 17 L17 7" />
  </svg>
);

export default DownRightArrow