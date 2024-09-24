import React from 'react';
import styles from './login.module.css'
import Logo from '../../pages/images/logo2.png';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginView = () => {
    return (
      <div className={styles.loginContainer}>
            <div className={styles.boxLoginContainer}>
                <div className={styles.logoJudulLogin}>
                    <Image className={styles.logoLogin} src={Logo} alt={''} />
                    <p className={styles.judulLogin}>Login</p>
                </div>
                <div className={styles.inputLogin}>
                    <p>Code Unique Account:</p>
                    <input type="text" placeholder='Enter your code' />
                </div>
                <button type="button" className="btn btn-secondary">Login</button>
            </div>
        </div>
    )
};

export default LoginView;