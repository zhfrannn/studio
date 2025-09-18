import { SVGProps } from 'react';

const WaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
    <path d="M3 12c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
    <path d="M3 18c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
    <path d="M12 6c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
    <path d="M12 12c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
    <path d="M12 18c.75-1.13 2.5-2 4.5-2s3.75.87 4.5 2-.75 1.13-2.5 2-3.75-.87-4.5-2" />
  </svg>
);

export default WaveIcon;
