import { ScrollGallery } from "./components/scroll-gallery";
import { ReactLenis } from "@/libs/react-lenis";

export default function Page() {
  return (
    <ReactLenis root>
      <ScrollGallery />
    </ReactLenis>
  );
}
