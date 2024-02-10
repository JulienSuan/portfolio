import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Test() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      { /* content */ }
    </ReactLenis>
  )
}


export default Test