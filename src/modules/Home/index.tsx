import React, { useState } from "react";
import dynamic from "next/dynamic";
import Title from "@/common/components/Title";
import Content from "@/common/components/Content";
import ListItem from "@/modules/Home/components/ListItem";

export default function Home() {

    const MapWithNoSSR = dynamic(() => import("../Home/components/Map"), {
        ssr: false
      });

  return (
    <div className="group max-w-md my-auto border border-black border-opacity-5 mx-auto rounded-xl shadow-lg bg-white">
      <div className="relative h-[300px]">
        <div className="relative h-full overflow-hidden rounded-t-xl">
         <MapWithNoSSR />
        </div>
      </div>
      <div className="px-4 pt-6 pb-8 flex flex-col gap-4">
        <Title title={"EV Station at Bali"} />
        <Content>
            <div className="flex flex-col gap-4 overflow-auto px-2">
                <ListItem 
                    title={""} 
                    url={""} 
                    imageUrl={""} 
                    cost={""} location={{
                          lat: 0,
                          long: 0
                      }}/>
            </div>
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