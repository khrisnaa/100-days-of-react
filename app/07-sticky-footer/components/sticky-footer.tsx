"use client";

export const StickyFooter = () => {
  return (
    <div>
      <div className="h-screen" />
      <Footer />
    </div>
  );
};

export const Footer = () => {
  return (
    <div
      className="relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className=" h-[600px] sticky top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className=" flex flex-col h-full items-center justify-between py-16 bg-black text-white">
      <p className="w-1/4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ex
        culpa tenetur suscipit voluptatibus minus harum. Sed beatae omnis totam!
      </p>
      <p className="text-8xl uppercase font-bold">Footer</p>
    </div>
  );
};
