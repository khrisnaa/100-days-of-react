import { HorizontalGallery } from "@/app/02-smooth-parallax/components/horizontal-gallery";
import { ScrollGallery } from "./components/scroll-gallery";

export default function Page() {
  return (
    <>
      <ScrollGallery />
      <HorizontalGallery />
    </>
  );
}
