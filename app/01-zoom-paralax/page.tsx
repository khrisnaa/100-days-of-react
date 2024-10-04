import { ZoomParallax } from "@/app/01-zoom-paralax/components/zoom-parallax";
import { ReactLenis, useLenis } from "@/libs/react-lenis";

export default function Page() {
  return (
    <ReactLenis root>
      <ZoomParallax />;
    </ReactLenis>
  );
}
