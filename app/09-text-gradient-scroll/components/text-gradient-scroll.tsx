import { Character } from "@/app/09-text-gradient-scroll/components/character";
import { Paragraph } from "@/app/09-text-gradient-scroll/components/paragraph";
import { Word } from "@/app/09-text-gradient-scroll/components/word";
import { ArrowDownFromLine } from "lucide-react";

const paragraph = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
litora torquent per conubia nostra, per inceptos himenaeos."`;

export const TextGradientScroll = () => {
  return (
    <div>
      <Spacer text="Paragraph" />
      <Paragraph value={paragraph} />
      <Spacer text="Word" />
      <Word value={paragraph} />
      <Spacer text="Character" />
      <Character value={paragraph} />
    </div>
  );
};

const Spacer = ({ text }: { text: string }) => {
  return (
    <div className="h-screen text-white uppercase gap-4 text-6xl bg-black font-anton flex flex-col justify-center items-center">
      {text}
      <span>
        <ArrowDownFromLine />
      </span>
    </div>
  );
};
