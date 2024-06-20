import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const CameraButtonIcon = (props) => (
  <Svg
    width={67}
    height={67}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={65}
      height={65}
      rx={6}
      fill={props.fillColor}
      stroke={props.strokeColor}
      strokeDasharray="2 2"
    />
    <G clipPath="url(#a)" fill={props.iconColor}>
      <Path d="M34.097 45.907H23.465c-2.237-.002-3.556-1.386-3.557-3.733l.001-13.523c.001-2.275 1.332-3.678 3.49-3.683 1.218-.002 2.436-.006 3.654.004.303.002.477-.008.532-.436.173-1.314 1.133-2.213 2.457-2.233 2.694-.041 5.39-.04 8.084-.001 1.321.02 2.217.88 2.445 2.248.06.36.182.429.491.424 1.292-.015 2.585-.013 3.877-.005 1.976.013 3.328 1.453 3.33 3.549.005 4.605.005 9.21 0 13.814-.002 2.119-1.364 3.565-3.374 3.57-3.6.01-7.2.005-10.798.005Zm-.04-1.517c3.561 0 7.123.001 10.684-.001 1.43-.001 2.11-.702 2.112-2.217.008-4.545.006-9.091 0-13.636-.002-1.338-.69-2.043-1.965-2.048-1.588-.005-3.174.003-4.762-.003-.679-.002-.931-.274-.941-.984-.004-.195.005-.39-.004-.585-.033-.714-.407-1.122-1.087-1.126-2.658-.01-5.316-.01-7.972 0-.682.003-1.052.397-1.103 1.115-.013.175-.004.351-.006.527-.008.807-.232 1.053-.981 1.054-1.532.004-3.064 0-4.596.001-1.445.001-2.091.684-2.092 2.213v13.402c0 1.636.625 2.287 2.193 2.287h10.52Z" />
      <Path d="M34.084 28.438c3.66-.005 6.625 3.112 6.641 6.98.018 3.874-2.976 7.027-6.66 7.015-3.657-.011-6.615-3.145-6.612-7.008.002-3.856 2.969-6.983 6.631-6.987Zm.022 12.482c2.849-.01 5.17-2.444 5.164-5.413-.006-3.072-2.306-5.51-5.195-5.51-2.853.003-5.17 2.46-5.164 5.482.004 3.02 2.328 5.453 5.195 5.441ZM45.002 29.81c-.009.78-.615 1.387-1.36 1.366-.72-.02-1.269-.63-1.261-1.4.008-.756.588-1.375 1.295-1.382.724-.007 1.335.645 1.326 1.416Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(19.908 22.273)"
          d="M0 0h28.364v23.636H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CameraButtonIcon;