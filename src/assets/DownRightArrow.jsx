const DownRightArrow = ({ color = '#9A79FC', size = "24" }) => (
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
    <path d="M7 7 L17 7 L17 17" />
    <path d="M7 17 L17 7" />
  </svg>
);