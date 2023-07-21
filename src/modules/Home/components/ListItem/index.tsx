import React from "react";

type ListItemProps = {
  title: string,
  url: string,
  imageUrl: string,
  cost: string
}

export default function ListItem({ title, imageUrl, cost }: ListItemProps) {
  return (
    <div className="flex items-start gap-4 border-b-black border-opacity-10 border-b-[0.2px] pb-2">
      <img
        alt={imageUrl}
        src={imageUrl}
        className="h-8 w-8 rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1 items-start my-auto">
        <div className="text-xs font-semibold text-black text-left">{title}</div>
      </div>
    </div>
  )
}