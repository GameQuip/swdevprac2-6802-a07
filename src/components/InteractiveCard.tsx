"use client";

import React from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  contentName: string;
}

export default function InteractiveCard({
  children,
  contentName,
}: InteractiveCardProps) {
  function onCardSelected() {
    alert("You Select " + contentName);
  }

  return (
    <div
      className="max-w-sm overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-lg hover:bg-neutral-200 hover:shadow-2xl hover:-translate-y-2"
      // onClick={onCardSelected}
    >
      {children}
    </div>
  );
}
