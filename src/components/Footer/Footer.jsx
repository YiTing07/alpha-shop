import styles from './Footer.module.scss';

import logo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

const footerContent = [
  {
    title: "客戶服務",
    details: ["運送說明", "退換貨相關", "付款資訊", "FAQ"]
  },
  {
    title: "關於我們",
    details: ["品牌故事", "媒體聯繫", "Press kit"]
  },
  {
    title: "資訊",
    details: ["隱私權政策", "Cookie", "GDPR"]
  }
]

const socialIcons = [
  { src: facebook, alt: "fbIcon" },
  { src: instagram, alt: "igIcon" },
  { src: whatsapp, alt: "whatsappIcon" }
]

function FooterSection() {
  return (
    <>
      {footerContent.map((item, index) => (
        <section key={index} className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>{item.title}</h2>
          <div className={styles.sectionContent}>
            {item.details.map((detail, index) => (
              <div key={index} className={`${styles.pageLink} cursorPoint`}>{detail}</div>
            ))}
          </div>
        </section>
      ))
      }
    </>
  )
}

function SocialIconGroup() {
  return (
    <div className="socialIconGroup">
      {socialIcons.map((icon, index) => (
        <img key={index} className={`${styles.socialIcon} cursorPoint`} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <section className={styles.footerSection}>
          <div className={styles.footerLogoContainer}>
            <img className={styles.cursorPoint} src={logo} alt="logoIcon" />
          </div>
        </section>

        <FooterSection />

        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
          <div className={styles.sectionContent}>
            <div className={styles.telInfo}>+886 02123-45678</div>
            <SocialIconGroup />
          </div>
        </section>
      </div>
    </footer>
  )
}