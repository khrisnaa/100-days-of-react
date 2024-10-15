import { Marquee } from "@/app/12-practicing/components/marquee";
import { ScrollProgress } from "@/app/12-practicing/components/scroll-progress";

const Page = () => {
  return (
    <div>
      <div className="relative h-screen bg-black">
        <div className="absolute w-full bottom-[50%]">
          <Marquee direction="left" />
          <Marquee direction="right" />
        </div>
      </div>
      <ScrollProgress />
    </div>
  );
};
export default Page;
