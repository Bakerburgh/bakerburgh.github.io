const DotGradientId = "dot-gradient";
export const DotGradient = `url(#${DotGradientId})`

function Defs() {
  return <defs>
    <radialGradient id={DotGradientId}>
      <stop offset="0%" stop-opacity="0.6" stop-color="currentColor"/>
      <stop offset="80%" stop-opacity="0" stop-color="currentColor"/>
    </radialGradient>
  </defs>
}

export default Defs;