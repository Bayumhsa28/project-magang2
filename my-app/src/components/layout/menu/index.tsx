"use client";
import React from 'react'
import styles from"./menu.module.css"
import Image from 'next/image'
import menuButtonTrantition from '@/pages/images/menuButtonTrantition.png'
import Navbar from "../navbar";
import { useState } from 'react'
const MenuView = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <div className={styles.menuContainer}>
      <div onClick={() => setShowNav(!showNav)} style={{ cursor: 'pointer' }}>
        <Image className={styles.buttonMenu} src={menuButtonTrantition} alt="Menu Button" />
      </div>
      <Navbar show={showNav} />
    </div>
  );
};

export default MenuView;