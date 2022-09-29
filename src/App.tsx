import './assets/styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </>
  )
}
