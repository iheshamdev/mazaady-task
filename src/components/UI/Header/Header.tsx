import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { HeaderSearchBox } from "@components";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <HeaderSearchBox />
        <Image
          src="/images/logo.png"
          alt="Mazaady's logo"
          width={110}
          height={36}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Header;
