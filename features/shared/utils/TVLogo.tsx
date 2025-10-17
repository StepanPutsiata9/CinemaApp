import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
export const TVLogo = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fill="#F90"
      stroke="#F90"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 12.833c-3-.5-3-.5-3.5-3.5-.5 3-.5 3-3.5 3.5 3 .5 3 .5 3.5 3.5.5-3 .5-3 3.5-3.5Z"
    />
    <Path
      fill="#F90"
      fillRule="evenodd"
      d="M9.675.985a1.167 1.167 0 0 1 1.65 0l.2.2a3.5 3.5 0 0 0 4.95 0l.2-.2a1.167 1.167 0 1 1 1.65 1.65l-.2.2a5.836 5.836 0 0 1-.147.142h1.855a5.833 5.833 0 0 1 5.834 5.833v8.167a5.833 5.833 0 0 1-5.834 5.833h-1.881l.655 3.13a1.167 1.167 0 1 1-2.214.739l-.9-3.87h-2.986l-.9 3.87a1.167 1.167 0 1 1-2.214-.738l.655-3.131H8.167a5.833 5.833 0 0 1-5.834-5.833V8.81a5.833 5.833 0 0 1 5.834-5.833h1.855a5.939 5.939 0 0 1-.147-.142l-.2-.2a1.167 1.167 0 0 1 0-1.65Zm2.018 19.492H8.168a3.5 3.5 0 0 1-3.5-3.5V8.81a3.5 3.5 0 0 1 3.5-3.5h11.666a3.5 3.5 0 0 1 3.5 3.5v8.167a3.5 3.5 0 0 1-3.5 3.5h-8.14Z"
      clipRule="evenodd"
    />
    <Circle cx={8.167} cy={17.5} r={1.167} fill="#F90" />
    <Circle cx={19.833} cy={8.167} r={1.167} fill="#F90" />
  </Svg>
);
