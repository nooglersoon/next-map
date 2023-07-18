import React, { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="bg-white h-screen flex px-8 py-12 overflow-auto">
      {children}
    </div>
  )
}