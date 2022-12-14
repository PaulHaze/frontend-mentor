/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import { useTheme } from '../../hooks/useTheme';

export function DarkModeSwitch() {
  const { setTheme, isDarkMode } = useTheme();

  const properties = {
    sun: {
      r: 9,
      transform: 'rotate(40deg)',
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } = isDarkMode
    ? properties.sun
    : properties.moon;

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });

  const centerCircleProps = useSpring({ r, config: properties.springConfig });

  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });

  const linesProps = useSpring({ opacity, config: properties.springConfig });

  const lightIconColor = '#8c8c8c';
  const darkIconColor = '#f1f1f1';

  return (
    <button
      type="button"
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="flex-center w-5 mr-1"
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke={isDarkMode ? 'currentColor' : lightIconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{ ...svgContainerProps, cursor: 'pointer' }}
        onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            style={maskedCircleProps as any}
            cx="12"
            cy="4"
            r="9"
            fill="black"
          />
        </mask>
        <animated.circle
          style={centerCircleProps as any}
          fill={isDarkMode ? darkIconColor : lightIconColor}
          cx="12"
          cy="12"
          r="9"
          mask="url(#mask)"
        />

        <animated.g style={linesProps} fill="#0f172a">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </button>
  );
}
