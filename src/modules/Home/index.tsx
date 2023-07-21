import React, { useState } from "react";
import dynamic from "next/dynamic";
import Title from "@/common/components/Title";
import Content from "@/common/components/Content";
import ListItem from "@/modules/Home/components/ListItem";
import { baliCoordinate } from '@/common/constants/coordinate';
import { spkluList } from "@/data/data"

export default function Home() {

  const [lat, setLat] = useState<number>(baliCoordinate.lat)
  const [long, setLong] = useState<number>(baliCoordinate.long)
  const [zoom, setZoom] = useState<number>(10)

  const MapWithNoSSR = dynamic(() => import("./components/Map"), {
    ssr: false
  });

  return (
    <div className="group max-w-md my-auto border border-black border-opacity-5 mx-auto rounded-xl shadow-lg bg-white">
      <div className="relative h-[300px]">
        <div className="relative h-full overflow-hidden rounded-t-xl">
          <MapWithNoSSR
            lat={lat}
            long={long}
            zoom={zoom}
          />
        </div>
      </div>
      <div className="px-4 pt-6 pb-8 flex flex-col gap-4">
        <Title title={"Bali's Public EV Charging Stations"} />
        <Content>
          <div className="flex flex-col gap-4 overflow-auto px-2">
            {
              spkluList.features.map((spklu, i) => {
                return <button
                  onClick={() => {
                    let geom: GeoJSON.GeoJsonProperties = spklu.geometry;
                    setLat(geom.coordinates[1])
                    setLong(geom.coordinates[0])
                    setZoom(14)
                  }}
                >
                  <ListItem
                    title={spklu.properties!.Name}
                    url={""}
                    imageUrl={"/charging-station.svg"}
                    cost={""}
                  />
                </button>
              })
            }
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