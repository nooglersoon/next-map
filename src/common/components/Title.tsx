import React from "react"

type Props = {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <p className="text-gray-900 font-bold text-md">
      {title}.
    </p>
  )
}