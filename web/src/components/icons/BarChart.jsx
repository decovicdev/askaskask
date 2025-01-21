export default function BarChart(props) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6 20V14'
        stroke='inherit'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 20V10'
        stroke='inherit'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 20V4'
        stroke='inherit'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
