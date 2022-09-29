import logoImg from '../../assets/images/logo.svg'

import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <img src={logoImg} alt="" />
    <strong>Ignite Feed</strong>
  </header>
)
