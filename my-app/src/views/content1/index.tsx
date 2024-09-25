import React, { useEffect, useState } from 'react';
import styles from "./content.module.css";
import AllKanan from '@/pages/images/allKananButton.png';
import AllKiri from '@/pages/images/allKiriButton.png';
import Kanan from '@/pages/images/kananButton.png';
import Kiri from '@/pages/images/kiriButton.png';
import search from '@/pages/images/searchButton.png';
import Kurang from '@/pages/images/kurangButton.png';
import Tambah from '@/pages/images/tambahButton.png';
import Image from 'next/image';

const Content1View = () => {
    const [stores, setStores] = useState([]);
    const [selectedStores, setSelectedStores] = useState([]); // State untuk menyimpan store yang dipilih
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermRight, setSearchTermRight] = useState(''); // State untuk mencari di box kanan

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch('/api/stores');
                const data = await response.json();
                setStores(data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        fetchStores();
    }, []);

    const filteredStores = stores.filter(store => 
        store.flag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredSelectedStores = selectedStores.filter(store => 
        store.flag.toLowerCase().includes(searchTermRight.toLowerCase())
    );

    const handleMoveRight = () => {
        const newSelectedStores = filteredStores.filter(store => 
            document.getElementById(store.code).checked // Cek apakah checkbox tercentang
        );

        // Tambahkan store terpilih ke state selectedStores jika belum ada
        setSelectedStores(prev => [
            ...prev,
            ...newSelectedStores.filter(store => !prev.includes(store))
        ]);
        
        // Hapus store dari box kiri
        setStores(prev => prev.filter(store => !newSelectedStores.includes(store)));

        // Reset checkbox
        newSelectedStores.forEach(store => {
            document.getElementById(store.code).checked = false;
        });
    };

    const handleMoveAllRight = () => {
        // Tambahkan semua store yang terfilter ke selectedStores
        setSelectedStores(prev => [
            ...prev,
            ...filteredStores.filter(store => !prev.includes(store))
        ]);

        // Hapus semua store dari box kiri
        setStores(prev => prev.filter(store => !filteredStores.includes(store)));

        // Reset checkbox
        filteredStores.forEach(store => {
            document.getElementById(store.code).checked = false;
        });
    };

    const handleMoveLeft = () => {
        const newSelectedStores = selectedStores.filter(store => 
            document.getElementById(store.code + '-right').checked // Cek apakah checkbox di kanan tercentang
        );

        // Hapus store yang dipilih dari selectedStores
        setSelectedStores(prev => prev.filter(store => !newSelectedStores.includes(store)));

        // Tambahkan kembali store ke box kiri
        setStores(prev => [
            ...prev,
            ...newSelectedStores
        ]);
    };

    const handleMoveAllLeft = () => {
        // Kosongkan selectedStores
        setSelectedStores([]);
        // Tambahkan semua store ke box kiri
        setStores(prev => [
            ...prev,
            ...selectedStores
        ]);
    };

    return (
      <div className={styles.customeBody}>
        <div className={styles.contentContainer}>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <div className={styles.judulboxContainer}>
                <h1 className={styles.judulBox}>Store</h1>
                <input 
                  className={styles.inputStore} 
                  type="text" 
                  name="name" 
                  placeholder="   Enter your name" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <Image className={styles.buttonSearch} src={search} width={26} height={26} alt={''} />
              </div>

              <div className={styles.isiBox}>
                {filteredStores.map((store) => (
                  <div className={styles.checkboxContainer} key={store.code}>
                    <input className={styles.checkboxStore} type="checkbox" id={store.code} />
                    <label className={styles.namaStore} htmlFor={store.code}>
                      {store.flag}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.buttonTengah}>
              <div className={styles.buttonContainer}>
                <button onClick={handleMoveAllRight}>
                  <Image className={styles.buttonTengah1} src={AllKanan} width={64} height={64} alt={''} />
                </button>
                <button onClick={handleMoveRight}>
                  <Image className={styles.buttonTengah1} src={Kanan} width={64} height={64} alt={''} />
                </button>
                <button onClick={handleMoveLeft}>
                  <Image className={styles.buttonTengah1} src={Kiri} width={64} height={64} alt={''} />
                </button>
                <button onClick={handleMoveAllLeft}>
                  <Image className={styles.buttonTengah1} src={AllKiri} width={64} height={64} alt={''} />
                </button>
              </div>
            </div>

            <div className={styles.box2}>
              <div className={styles.judulboxContainer}>
                <h1 className={styles.judulBox}>Store</h1>
                <input 
                  className={styles.inputStore} 
                  type="text" 
                  name="name" 
                  placeholder="   Search in selected stores" 
                  value={searchTermRight} 
                  onChange={(e) => setSearchTermRight(e.target.value)} 
                />
                <Image className={styles.buttonSearch} src={search} width={26} height={26} alt={''} />
              </div>

              {/* Menampilkan checkbox yang dipindahkan */}
              <div className={styles.isiBox}>
                {filteredSelectedStores.map((store) => (
                  <div className={styles.checkboxContainer} key={store.code}>
                    <input className={styles.checkboxStore} type="checkbox" id={store.code + '-right'} defaultChecked />
                    <label className={styles.namaStore} htmlFor={store.code + '-right'}>
                      {store.flag}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kontainer untuk tulisan Divisi, Dept, Group Family */}
          <div className={styles.divisiContainer}>
            <div className={styles.formContainer}>
              <h1>Divisi</h1>
              <input type="text" />
            </div>

            <div className={styles.formContainer}>
              <h1>Departement</h1>
              <input type="text" />
            </div>

            <div className={styles.formContainer}>
              <h1>Group Family</h1>
              <input type="text" />
            </div>

            <div className={styles.formContainer}>
              <h1>Family</h1>
              <input type="text" />
            </div>

            <div className={styles.formContainer}>
              <h1>Sub Family</h1>
              <input type="text" />
            </div>

            <div className={styles.formContainer}>
              <h1>Item Code</h1>
              <input type="text" />
              <Image src={search} className={styles.searchCode} alt={''} />
            </div>
          </div>

          <div className={styles.layoutTabel}>
            <table>
              <thead>
                <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {/* Tambahkan baris item sesuai kebutuhan */}
              </tbody>
            </table>
          </div>

          <div className={styles.kurangTambah}>
            <Image src={Kurang} className={styles.buttonLeft} alt={'kurang button'} />
            <Image src={Tambah} className={styles.buttonRight} alt={'tambah button'} />
          </div>
        </div>
      </div>
    );
};

export default Content1View;
