// import Image from "next/image";

import services from "./components/services";
import Banner from "./components/banner";
import MoreServices from "./components/moreServices";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_10px] justify-items-between min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <div>
        {services()}
        </div>
        <div>
        {Banner()}
        </div>
        <div>
        {MoreServices()}
        </div>
        <div>
        {Footer()}
        </div>
      </main>
    </div>
  );
}
