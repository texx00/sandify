// L-system instructions for space filling curves
export const subtypes = {
  // http://mathforum.org/advanced/robertd/lsys2d.html
  '32-segment': {
    axiom: 'F+F+F+F',
    draw: ['F'],
    rules:  {
      F: '-F+F-F-F+F+FF-F+F+FF+F-F-FF+FF-FF+F+F-FF-F-F+FF-F-F+F+F-F+'
    },
    startingAngle: Math.PI,
    maxIterations: 2
  },
  // http://www.kevs3d.co.uk/dev/lsystems/
  'Cog Triangle': {
    axiom: 'W----W----W----W',
    draw: ['F'],
    rules:  {
      W: '+++X--F--ZFX+',
      X: '---W++F++YFW-',
      Y: '+ZFX--F--Z+++',
      Z: '-YFW++F++Y---'
    },
    angle: Math.PI/6,
    minIterations: 1,
    maxIterations: 8
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'Gosper (flowsnake)': {
    axiom: 'A',
    draw: ['A', 'B'],
    rules:  {
      A: 'A-B--B+A++AA+B-',
      B: '+A-BB--B-A++A+B'
    },
    angle: Math.PI / 3,
    maxIterations: 5
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'Ice': {
    axiom: 'F+F+F+F',
    draw: ['F'],
    rules:  {
      F: 'FF+F++F+F'
    },
    startingAngle: Math.PI,
    maxIterations: 6
  },
  // https://onlinemathtools.com/l-system-generator
  'Koch Curve': {
    axiom: 'F',
    draw: ['F'],
    rules:  {
      F: 'F+F--F+F'
    },
    angle: 4*Math.PI/9,
    startingAngle: Math.PI,
    maxIterations: 7
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'Koch Island': {
    axiom: 'F+F+F+F',
    draw: ['F'],
    rules:  {
      F: 'F+F-F-FF+F+F-F'
    },
    startingAngle: Math.PI,
    maxIterations: 4
  },
  'Koch Snowflake': {
    axiom: 'F--F--F--',
    draw: ['F'],
    rules:  {
      F: 'F+F--F+F'
    },
    angle: Math.PI / 3,
    startingAngle: -Math.PI / 3,
    maxIterations: 5
  },
  // https://fronkonstin.com/2017/06/26/a-shiny-app-to-draw-curves-based-on-l-systems/
  'Koch Variation 1': {
    axiom: 'F-F-F-F',
    draw: ['F'],
    rules:  {
      F: 'FF-F-F-F-FF',
    },
    maxIterations: 5
  },
  // https://fronkonstin.com/2017/06/26/a-shiny-app-to-draw-curves-based-on-l-systems/
  'Koch Variation 2': {
    axiom: 'F-F-F-F',
    draw: ['F'],
    rules:  {
      F: 'FF-F-F-F-F-F+F',
    },
    maxIterations: 4
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'McWorter\'s Pentadendrite': {
    axiom: 'F-F-F-F-F',
    draw: ['F'],
    rules:  {
      F: 'F-F-F++F+F-F',
    },
    angle: 2*Math.PI/5,
    maxIterations: 5
  },
  // cannot do this until we support branching with legal vertex moves
  // https://onlinemathtools.com/l-system-generator
  // 'Penrose Tile': {
  //   axiom: '[7]++[7]++[7]++[7]++[7]',
  //   draw: ['6', '7', '8', '9'],
  //   rules: {
  //     6: '8++9----7[-8----6]++',
  //     7: '+8--9[---6--7]+',
  //     8: '-6++7[+++8++9]-',
  //     9: '--8++++6[+9++++7]--7'
  //   },
  //   angle: Math.PI/5
  //},
  'Plusses': {
    axiom: 'XYXYXYX+XYXYXYX+XYXYXYX+XYXYXYX',
    draw: ['F'],
    rules:  {
      X: 'FX+FX+FXFY-FY-',
      Y: '+FX+FXFY-FY-FY'
    },
    maxIterations: 4
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'Red Dragon': {
    axiom: 'FA',
    draw: ['F'],
    rules:  {
      A: 'A+BF+',
      B: '-FA-B'
    },
    minIterations: 9,
    maxIterations: 15,
    startingAngle: Math.PI
  },
  // http://mathforum.org/advanced/robertd/lsys2d.html
  'Sierpinski Triangle (arrowhead)': {
    axiom: 'X',
    draw: ['X', 'Y'],
    rules:  {
      X: 'Y+X+Y',
      Y: 'X-Y-X'
    },
    angle: Math.PI / 3,
    startingAngle: (i) => {
      if (i % 2 === 0) {
        return 0
      } else {
        return -Math.PI/3
      }
    },
    maxIterations: 8
  },
}
