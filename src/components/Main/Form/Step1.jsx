import styles from './Step1.module.scss';

const appellation = [
  { text: '先生', value: 'mr' },
  { text: '小姐', value: 'ms' },
  { text: '不明', value: 'mx' }
]

const cities = [
  { text: '請選擇縣市', value: '' },
  { text: '基隆市', value: 'KLU' },
  { text: '新北市', value: 'TPH' },
  { text: '臺北市', value: 'TPE' },
  { text: '桃園市', value: 'TYC' },
  { text: '新竹縣', value: 'HSH' },
  { text: '新竹市', value: 'HSC' },
  { text: '苗栗市', value: 'MAC' },
  { text: '苗栗縣', value: 'MAL' },
  { text: '臺中市', value: 'TXG' },
  { text: '彰化縣', value: 'CWH' },
  { text: '彰化市', value: 'CWS' },
  { text: '南投市', value: 'NTC' },
  { text: '南投縣', value: 'NTO' },
  { text: '雲林縣', value: 'YLH' },
  { text: '嘉義縣', value: 'CHY' },
  { text: '嘉義市', value: 'CYI' },
  { text: '臺南市', value: 'TNN' },
  { text: '高雄市', value: 'KHH' },
  { text: '屏東縣', value: 'IUH' },
  { text: '屏東市', value: 'PTS' },
  { text: '宜蘭縣', value: 'ILN' },
  { text: '宜蘭市', value: 'ILC' },
  { text: '花蓮縣', value: 'HWA' },
  { text: '花蓮市', value: 'HWC' },
  { text: '臺東市', value: 'TTC' },
  { text: '臺東縣', value: 'TTT' },
  { text: '澎湖縣', value: 'PEH' },
  { text: '金門縣', value: 'KMN' },
  { text: '連江縣', value: 'LNN' }
]

function AppellationOption() {
  return (
    <>
      {appellation.map((item, index) =>
        <option key={index} value={item.value} >{item.text}</option>
      )}
    </>
  )
}

function CityOption() {
  return (
    <>
      {cities.map((city, index) =>
        <option key={index} value={city.value}>{city.text}</option>
      )}
    </>
  )
}

export default function Address() {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      <form className="col col-12" data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className={`${styles.col} col-12`}>
          <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select defaultValue="mr">
                <AppellationOption />
              </select>
            </div>
          </div>
          <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
            <div className={styles.inputLabel}>姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
            <div className={styles.inputLabel}>電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
            <div className={styles.inputLabel}>Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
            <div className={styles.inputLabel}>縣市</div>
            <div className={styles.selectContainer}>
              <select defaultValue="">
                <CityOption />
              </select>
            </div>
          </div>
          <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
            <div className={styles.inputLabel}>地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
    </section>
    
  )
}