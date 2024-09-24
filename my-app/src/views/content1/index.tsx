import React from 'react';
import styles from "./content.module.css"
import AllKanan from '@/pages/images/allKananButton.png';
import AllKiri from '@/pages/images/allKiriButton.png';
import Kanan from '@/pages/images/kananButton.png';
import Kiri from '@/pages/images/kiriButton.png';
import search from '@/pages/images/searchButton.png';
import Kurang from '@/pages/images/kurangButton.png';
import Tambah from '@/pages/images/tambahButton.png';

import Image from 'next/image';

const Content1View = () => {
    return (
      <div className={styles.customeBody}>
        <div className={styles.contentContainer}>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <div className={styles.judulboxContainer}>
                <h1 className={styles.judulBox}>Store</h1>
                <input className={styles.inputStore} type="text" name="name" placeholder="   Enter your name" />
                <Image className={styles.buttonSearch} src={search} width={26} height={26} alt={''} />
              </div>
    
              <div className={styles.isiBox}>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe1" id="newsletter1" />
                  <label className={styles.namaStore} htmlFor="newsletter1">tes 123</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe2" id="newsletter2" />
                  <label className={styles.namaStore} htmlFor="newsletter2">tes 456</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
    
              </div>
            </div>
    
            <div className={styles.buttonTengah}>
              <div className={styles.buttonContainer}>
                <button>
                  <Image className={styles.buttonTengah1}src={AllKanan} width={64} height={64} alt={''} />
                </button>
    
                <button>
                  <Image className={styles.buttonTengah1} src={Kanan} width={64} height={64} alt={''} />
                </button>
    
                <button>
                  <Image className={styles.buttonTengah1} src={Kiri} width={64} height={64} alt={''} />
                </button>
    
                <button>
                  <Image className={styles.buttonTengah1} src={AllKiri} width={64} height={64} alt={''} />
                </button>
              </div>
            </div>
    
            <div className={styles.box2}>
              <div className={styles.judulboxContainer}>
                <h1 className={styles.judulBox}>Store</h1>
                <input className={styles.inputStore} type="text" name="name" placeholder="   Enter your name" />
                <Image className={styles.buttonSearch} src={search} width={26} height={26} alt={''} />
              </div>
    
              <div className={styles.isiBox}>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe1" id="newsletter1" />
                  <label className={styles.namaStore} htmlFor="newsletter1">tes 123</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe2" id="newsletter2" />
                  <label className={styles.namaStore} htmlFor="newsletter2">tes 456</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.checkboxStore} type="checkbox" name="subscribe3" id="newsletter3" />
                  <label className={styles.namaStore} htmlFor="newsletter3">tes 789</label>
                </div>
              </div>
            </div>
          </div>
          {/* Kontainer baru untuk tulisan Divisi, Dept, Group Family */}
          <div className={styles.divisiContainer}>
    
            <div className={styles.formContainer}>
              <h1>Divisi</h1>
              <input type="text" />
              <div className={styles.searchCode} />
            </div>
    
            <div className={styles.formContainer}>
              <h1>Departement</h1>
              <input type="text" />
              <div className={styles.searchCode} />
            </div>
    
            <div className={styles.formContainer}>
              <h1>Group Family</h1>
              <input type="text" />
              <div className={styles.searchCode} />
            </div>
    
            <div className={styles.formContainer}>
              <h1>Family</h1>
              <input type="text" />
              <div className={styles.searchCode} />
            </div>
    
            <div className={styles.formContainer}>
              <h1>Sub Family</h1>
              <input type="text" />
              <div className={styles.searchCode} />
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
                <tr>
                  <td>Bayu</td>
                  <td>Frontend Developer</td>
                  <td>IT</td>
                </tr>
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