"use client";

import { useEffect, useState } from "react";

import Info from "../../components/Info";

import Image from "next/image";
import styles from "./page.module.css";

import logo from "../../public/spaceholder-logo-horizontal.svg";

export default function Home() {
  const [info, setInfo] = useState(false);

  const fadeOut = () => setInfo(true);

  useEffect(() => {
    setTimeout(fadeOut, 3000);
  });

  return (
    <main>
      {info && <Info />}
      <div className="logoWrapper" onClick={() => setInfo(true)}>
        <Image src={logo} width={500} height={100} />
      </div>
    </main>
  );
}
