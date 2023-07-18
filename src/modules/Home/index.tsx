import React, { useState } from "react";
import Image from "next/image";
import Title from "@/common/components/Title";
import Content from "@/common/components/Content";

export default function Home() {

  return (
    <div className="group max-w-md my-auto border border-black border-opacity-5 mx-auto rounded-xl shadow-lg bg-white">
      <div className="relative h-[300px]">
        <div className="relative h-full overflow-hidden rounded-t-xl">
          <Image
            src={""}
            alt=""
            className=" object-cover w-full"
            fill={true}
            priority
          />
        </div>
      </div>
      <div className="px-4 pt-6 pb-8 flex flex-col gap-4">
        <Title title={"Hello"} />
        <Content>
        </Content>
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="pb-4 px-4">
      <p className="text-[8px] text-black">© {year}. Bali EV Station by nooglersoon.</p>
    </div>
  )
}