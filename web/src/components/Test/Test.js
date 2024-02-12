import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Test() {
  const lenis = useLenis((scrolll) => {
    console.log(scrolll)

    if (isMobile()) {
      if (scrolll.options && typeof scrolll.options === 'function') {
        scrolll.options({ smooth: false });
      }
    }
  });

  const isMobile = () => {
    return window.innerWidth <= 550; 
  }

  return (
    <ReactLenis root>
      
    </ReactLenis>
  );
}

export default Test;
