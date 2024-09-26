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
  const [selectedStores, setSelectedStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermRight, setSearchTermRight] = useState('');
  const [itemCode, setItemCode] = useState(''); // State untuk input Kode Item
  const [items, setItems] = useState([]); // State untuk semua item
  const [filteredItems, setFilteredItems] = useState([]); // State untuk item yang terfilter

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

    fetchStores(); // Ambil data stores saat komponen dipasang
  }, []);

  const fetchItems = async (code) => {
    if (code) {
      try {
        const response = await fetch(`/api/items?itemCode=${code}`); // Kirimkan kode item ke API
        const data = await response.json();
        setFilteredItems(data); // Set filteredItems dengan data yang diterima
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    } else {
      setFilteredItems([]); // Jika tidak ada kode, kosongkan filteredItems
    }
  };


  // Memanggil fetchItems setiap kali itemCode berubah
  useEffect(() => {
    fetchItems(itemCode);
  }, [itemCode]);

  const filteredStores = stores.filter(store =>
    store.flag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSelectedStores = selectedStores.filter(store =>
    store.flag.toLowerCase().includes(searchTermRight.toLowerCase())
  );

  const handleMoveRight = () => {
    const newSelectedStores = filteredStores.filter(store =>
      document.getElementById(store.code).checked
    );

    setSelectedStores(prev => [
      ...prev,
      ...newSelectedStores.filter(store => !prev.includes(store))
    ]);

    setStores(prev => prev.filter(store => !newSelectedStores.includes(store)));

    newSelectedStores.forEach(store => {
      document.getElementById(store.code).checked = false;
    });
  };

  const handleMoveAllRight = () => {
    setSelectedStores(prev => [
      ...prev,
      ...filteredStores.filter(store => !prev.includes(store))
    ]);

    setStores(prev => prev.filter(store => !filteredStores.includes(store)));

    filteredStores.forEach(store => {
      document.getElementById(store.code).checked = false;
    });
  };

  const handleMoveLeft = () => {
    const newSelectedStores = selectedStores.filter(store =>
      document.getElementById(store.code + '-right').checked
    );

    setSelectedStores(prev => prev.filter(store => !newSelectedStores.includes(store)));

    setStores(prev => [
      ...prev,
      ...newSelectedStores
    ]);
  };

  const handleMoveAllLeft = () => {
    setSelectedStores([]);
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
                placeholder="   Masukkan nama Anda"
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
                placeholder="   Cari di toko terpilih"
                value={searchTermRight}
                onChange={(e) => setSearchTermRight(e.target.value)}
              />
              <Image className={styles.buttonSearch} src={search} width={26} height={26} alt={''} />
            </div>

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

        <div className={styles.divisiContainer}>
          <div className={styles.formContainer}>
            <h1>Divisi</h1>
            <input type="text" />
          </div>

          <div className={styles.formContainer}>
            <h1>Departemen</h1>
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
            <h1>Kode Item</h1>
            <input
              type="text"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)} // Perbarui state itemCode
            />
            <Image src={search} className={styles.searchCode} alt={''} />
          </div>
        </div>

        <div className={styles.layoutTabel}>
          <table>
            <thead>
              <tr>
                <th>Kode Item</th>
                <th>Nama Item</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.item_code}> {/* Pastikan ada kunci unik untuk setiap baris */}
                    <td>{item.item_code}</td>
                    <td>{item.item_name}</td>
                    <td>{item.unit}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center' }}>Tidak ada data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Kurang} className={styles.kurang} alt={''} />
          <Image src={Tambah} className={styles.tambah} alt={''} />
        </div>
      </div>
    </div>
  );
};

export default Content1View;
