const FullCurve = ({
  bgLineColor = "black",
  loadingLineColor = "white",
  percent = "720",
  width = "1440",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="40"
      viewBox={`0 0 ${width} 40`}
      fill="none"
    >
      <clipPath id="clipPath">
        {/* Define the clipping region as a rectangle covering the left half */}
        <rect x="0" y="0" width={percent} height="40" />
      </clipPath>
      {/* Full path */}
      <path
        d="M0 38C116.657 26.6984 387.776 7.48566 538.996 21.0476C728.021 38 727.018 38 802.227 38C877.436 38 1170.25 -5.37814 1274.04 3.09807C1357.07 9.87903 1419.94 29.1914 1441 38"
        stroke={bgLineColor}
        strokeWidth="3"
      />
      {/* Clipped Path */}
      <path
        d="M0 38C116.657 26.6984 387.776 7.48566 538.996 21.0476C728.021 38 727.018 38 802.227 38C877.436 38 1170.25 -5.37814 1274.04 3.09807C1357.07 9.87903 1419.94 29.1914 1441 38"
        stroke={loadingLineColor}
        strokeWidth="3"
        clipPath="url(#clipPath)" // Apply the clipping path to the path element
      />
    </svg>
  );
};

export default FullCurve;
