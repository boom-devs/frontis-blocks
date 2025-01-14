export const Globe = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="#fff" d="M0 0h24v24H0z" />
    <circle cx={12} cy={12} r={9} stroke="#000" strokeLinejoin="round" />
    <path
      stroke="#000"
      strokeLinejoin="round"
      d="M12 3s-3.5 3-3.5 9 3.5 9 3.5 9M12 3s3.5 3 3.5 9-3.5 9-3.5 9M3 12h18M19.5 7.5h-15"
    />
    <g filter="url(#a)">
      <path stroke="#000" strokeLinejoin="round" d="M19.5 16.5h-15" />
    </g>
    <defs>
      <filter
        id="a"
        width={17}
        height={3}
        x={3.5}
        y={16}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_15_556" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_15_556"
          result="shape"
        />
      </filter>
            </defs>
        </svg>
    )
}