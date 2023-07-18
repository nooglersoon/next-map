import React from "react";

type Location = {
    lat: number,
    long: number
}

type ListItemProps = {
    title: string,
    url: string,
    imageUrl: string,
    cost: string
    location: Location
}

export default function ListItem({title, url, imageUrl, cost, location}: ListItemProps) {
    return(
    <div className="flex items-start gap-4 border-b-black border-opacity-10 border-b-[0.2px] pb-2">
        <img
          alt={imageUrl}
          src={imageUrl}
          className="h-8 w-8 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-1 items-start">
          <div className="text-sm font-semibold text-black">{title}</div>
          <div className="text-[10px] font-regular text-black">{cost}</div>
          <div className="text-[9px] font-regular text-black mt-2"> {location.lat}</div>
        </div>
      </div>
    )   
}