import styles from"./navbar.module.css"
import Logo from "@/pages/images/logo.png"
import Image from 'next/image';
const NavbarView = ({show}) => {
    return(
        <div className={show ? `${styles.sideNav} ${styles.active}` : styles.sideNav}>

            <Image src={Logo} alt={'logo'} className={styles.logo}/>
            <ul>
                <li><a href="/">home</a></li>
            </ul>
        

            <ul>
                <li><a href="/">home</a></li>
            </ul>

            <ul>
                <li><a href="/">home</a></li>
            </ul>
        </div>
    )
}

export default NavbarView;