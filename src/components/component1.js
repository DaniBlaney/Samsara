import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return <animated.div style={props}><h1 style={c1Style}>Welcome</h1></animated.div>

}

const c1Style = {
  color: 'black',
  padding: '1.5rem',
}
