import Image from "next/image";
import { FirstList } from "./_components/first";
import { SecondList } from "./_components/second";
import { ThirdList } from "./_components/third";
import myLogo from "../public/images.png";

export default function Home() {
  return (
    <>
      <FirstList />
      <SecondList />
      <ThirdList />
      <Image src={myLogo} alt="sda" />
    </>
  );
}
