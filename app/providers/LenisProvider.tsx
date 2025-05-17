"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis(({ scroll }) => {
    // Called on every scroll
    // console.log(scroll)
  });

  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
