const ExitIcon = ({ color = '#9A79FC', size = "24" }) => (
  <svg
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
    <line style={{filter: "drop-shadow(0px 0px 1px #9474df)"}} x1="18" y1="6" x2="6" y2="18" />
    <line style={{filter: "drop-shadow(0px 0px 1px #9474df)"}} x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default ExitIcon;
