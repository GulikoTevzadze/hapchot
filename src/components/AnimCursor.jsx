  import React from "react";
  import AnimatedCursor from "react-animated-cursor"

  export default function AminCursor() {
    return (
      <>
        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color='105,105,105'
          outerAlpha={0.3}
          innerScale={1.5}
          outerScale={5}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      </>
    )
  }