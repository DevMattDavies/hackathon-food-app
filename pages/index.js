import Head from "next/head";
import Image from "next/image";

import { menuItems } from "../data/menu-data";

export default function Home() {
  return (
    <>
      {Object.values(menuItems).map((item) => {
        return <p>{item.title}</p>;
      })}
    </>
  );
}
