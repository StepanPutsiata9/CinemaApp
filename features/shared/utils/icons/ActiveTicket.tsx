import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';
export const ActiveTicket = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.813 21.36a2 2 0 0 0 2 2h20.375a2 2 0 0 0 2-2v-3.68a3.814 3.814 0 0 1 0-7.36V6.64a2 2 0 0 0-2-2H3.813a2 2 0 0 0-2 2v3.672a3.814 3.814 0 0 1 0 7.376v3.671Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.219 4.656v3.282"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.219 12.36v3.28"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.219 20.078v3.281"
    />
    <Defs>
      <LinearGradient id="a" x1={14} x2={14} y1={4.641} y2={23.359} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={18.719}
        x2={18.719}
        y1={4.656}
        y2={7.938}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={18.719}
        x2={18.719}
        y1={12.359}
        y2={15.641}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={18.719}
        x2={18.719}
        y1={20.078}
        y2={23.359}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#121212" />
        <Stop offset={1} stopColor="#121212" />
      </LinearGradient>
    </Defs>
  </Svg>
);
