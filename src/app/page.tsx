import Image from "next/image";
import heroBg from "public/images/hero-bg.png";
import Button from "@/component/Button/Button";

export default function Home() {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="flex justify-center items-center">
          <div className="max-w-lg space-y-5">
            <h1 className="text-6xl font-semibold">lorem ipsum dollar emmet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button url={"/"}>See Our Works</Button>
          </div>
          <Image width="450" height="450" src={heroBg} alt="hero image" />
        </div>
      </div>
    </>
  );
}
