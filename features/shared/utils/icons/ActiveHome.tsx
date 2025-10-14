import * as React from 'react';
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';
export const ActiveHome = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} clipPath="url(#a)">
      <Path
        stroke="url(#b)"
        d="M23.143 11.897a1.712 1.712 0 0 0-.549-1.268L12 .857 1.406 10.63a1.715 1.715 0 0 0-.549 1.268v9.531a1.714 1.714 0 0 0 1.715 1.715h18.857a1.715 1.715 0 0 0 1.714-1.715v-9.53Z"
      />
      <Path stroke="url(#c)" d="M12 23.143v-6.857" />
    </G>
    <Defs>
      <LinearGradient id="b" x1={12} x2={12} y1={0.857} y2={23.143} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={12.5}
        x2={12.5}
        y1={16.286}
        y2={23.143}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
