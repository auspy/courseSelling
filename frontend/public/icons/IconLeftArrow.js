const IconLeftArrow = ({ fill = "var(--light-bg)" }) => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_145_251)">
        <path
          d="M0 0.430908C20.271 0.89515 32.6479 1.78612 50 0.430908V11.542C49.5483 35.361 49.4099 46.519 50 50.4309H0C0.849224 33.9844 0.378446 21.3291 0 0.430908Z"
          fill={fill}
        />
        <path
          d="M49.1093 38.4502C49.0936 44.1431 49.185 47.8108 49.4298 49.9309H0.5261C1.21165 36.2678 0.988967 25.1501 0.678003 9.62479C0.623052 6.88124 0.565343 4.00004 0.509402 0.942839C4.69585 1.04085 8.54783 1.15644 12.1807 1.26546C25.6717 1.67031 36.1415 1.9845 49.5 0.970883V11.5374C49.2742 23.4435 49.1266 32.1904 49.1093 38.4502Z"
          stroke="#111111"
        />
      </g>
      <path
        d="M1.20908 43.5821C3.70673 42.9479 14.7449 43.3322 38.9162 49.9429"
        stroke="#111111"
      />
      <path
        d="M19.3951 1.43091C27.4744 3.90332 44.8022 9.69273 49.4784 13.0711"
        stroke="#111111"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.41 20.8409L28 19.4309L22 25.4309L28 31.4309L29.41 30.0209L24.83 25.4309L29.41 20.8409Z"
        fill="#111111"
      />
      <defs>
        <filter
          id="filter0_d_145_251"
          x="0"
          y="0.430908"
          width="55"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0166667 0 0 0 0 0.0166667 0 0 0 0 0.0166667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_145_251"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_145_251"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconLeftArrow;
