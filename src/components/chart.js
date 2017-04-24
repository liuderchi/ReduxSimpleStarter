import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({height, width, data, color}) => {
  return (
    <div>
      <Sparklines
        height={height || 120}
        width={width || 180}
        data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
}
