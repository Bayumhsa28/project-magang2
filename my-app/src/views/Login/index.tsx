import React, { useState } from 'react';
import styles from './login.module.css';
import Logo from '../../pages/images/logo2.png';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'; // Import useRouter

const LoginView = () => {
    const [nik, setNik] = useState('');
    const router = useRouter(); // Inisialisasi useRouter

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST', // Ganti dengan metode POST jika Anda ingin memproses login
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nik }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const userData = await response.json();
            console.log('User data:', userData);
            
            // Redirect ke halaman content1 setelah login berhasil
            router.push('/content1');
        } catch (error) {
            console.error('Error:', error);
            // Tampilkan pesan kesalahan kepada pengguna jika diperlukan
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.boxLoginContainer}>
                <div className={styles.logoJudulLogin}>
                    <Image className={styles.logoLogin} src={Logo} alt={''} />
                    <p className={styles.judulLogin}>Login</p>
                </div>
                <div className={styles.inputLogin}>
                    <p>NIK:</p>
                    <input
                        type="text"
                        placeholder='Enter your NIK'
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-secondary" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginView;
