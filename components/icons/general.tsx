const ArrowRightLongerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 8L22 12L18 16"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CopyRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_copyright)">
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke="#8B8B8B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.41343 7.415C7.13363 7.69448 6.77726 7.88474 6.38936 7.96173C6.00146 8.03872 5.59944 7.99899 5.23412 7.84755C4.8688 7.69611 4.55657 7.43976 4.33691 7.11091C4.11724 6.78206 4 6.39547 4 6C4 5.60453 4.11724 5.21794 4.33691 4.88909C4.55657 4.56024 4.8688 4.3039 5.23412 4.15245C5.59944 4.00101 6.00146 3.96128 6.38936 4.03827C6.77726 4.11526 7.13363 4.30552 7.41343 4.585"
          stroke="#8B8B8B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_copyright">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="currentColor"
    />
  </svg>
);

const RightArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33374 8H12.6671"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.3335L12.6667 8.00016L8 12.6668"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowRightLongerIcon, CopyRightIcon, LinkedIn, RightArrow };
