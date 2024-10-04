import { ZoomParallax } from "@/app/01-zoom-parallax/components/zoom-parallax";
import { ZoomParallaxSticky } from "@/app/01-zoom-parallax/components/zoom-parrallax-sticky";
import { ReactLenis, useLenis } from "@/libs/react-lenis";

export default function Page() {
  return (
    <ReactLenis root>
      <ZoomParallax />
      <ZoomParallaxSticky />
    </ReactLenis>
  );
}
