import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.561 16.145c-.43 0-.797-.153-1.103-.46A1.505 1.505 0 010 14.582V3.642c0-.43.153-.799.458-1.105a1.504 1.504 0 011.103-.459h6.966L6.966 3.641H1.56v10.94h10.927v-5.43l1.56-1.563v6.994c0 .43-.152.797-.457 1.103-.306.307-.674.46-1.103.46H1.56zm8.722-13.618l1.112 1.095-5.151 5.157v1.114h1.093l5.17-5.177L13.62 5.81l-5.171 5.177a1.66 1.66 0 01-.497.342 1.444 1.444 0 01-.596.127H5.463a.754.754 0 01-.555-.224.757.757 0 01-.225-.557V8.779a1.548 1.548 0 01.449-1.094l5.15-5.158zM13.62 5.81l-3.337-3.283L12.234.574a1.53 1.53 0 011.123-.47c.435 0 .802.157 1.102.47l1.092 1.113c.3.3.449.665.449 1.094 0 .43-.15.795-.449 1.095L13.62 5.81z"
        fill="#0877BD"
      />
    </svg>
  );
}

export default SvgComponent;