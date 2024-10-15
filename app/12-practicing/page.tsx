import { Marquee } from "@/app/12-practicing/components/marquee";

const Page = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full bottom-0">
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>
    </div>
  );
};
export default Page;
