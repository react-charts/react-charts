import React from 'react';
//

const defaultStyle = {
  r: 2,
  strokeWidth: '1',
  stroke: '#000000',
  fill: '#000000',
  opacity: 1,
};

const Circle = React.forwardRef<
  SVGCircleElement,
  React.ComponentProps<'circle'>
>(({ style, ...rest }, ref) => {
  const resolvedStyle = {
    ...defaultStyle,
    ...style,
  };

  return <circle ref={ref} {...rest} style={resolvedStyle} />;
});

export default Circle;
