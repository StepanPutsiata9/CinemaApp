import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';
export const InactiveProfile = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path fill="url(#a)" d="M14 14a5.833 5.833 0 1 0 0-11.667A5.833 5.833 0 0 0 14 14Z" />
    <Path
      fill="url(#b)"
      d="M14 16.917c-5.845 0-10.605 3.92-10.605 8.75 0 .326.257.583.583.583h20.044a.578.578 0 0 0 .583-.583c0-4.83-4.76-8.75-10.605-8.75Z"
    />
    <Defs>
      <LinearGradient id="a" x1={14} x2={14} y1={2.333} y2={14} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFB412" />
      </LinearGradient>
      <LinearGradient id="b" x1={14} x2={14} y1={16.917} y2={26.25} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFB412" />
      </LinearGradient>
    </Defs>
  </Svg>
);
