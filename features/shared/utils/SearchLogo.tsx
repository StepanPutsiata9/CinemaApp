import * as React from 'react';
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';
export const SearchLogo = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} clipPath="url(#a)">
      <Path
        stroke="url(#b)"
        d="M6.857 13.143a6.286 6.286 0 1 0 0-12.572 6.286 6.286 0 0 0 0 12.572Z"
      />
      <Path stroke="url(#c)" d="m15.429 15.429-4-4" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={6.857}
        x2={6.857}
        y1={0.571}
        y2={13.143}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFC812" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={13.429}
        x2={13.429}
        y1={11.429}
        y2={15.429}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFC812" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
