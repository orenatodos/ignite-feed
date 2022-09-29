import { PencilLine } from 'phosphor-react'

import { Avatar } from '../Avatar'

import styles from './Sidebar.module.css'

export const Sidebar = () => (
  <aside className={styles.wrapper}>
    <img
      src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      className={styles.cover}
    />

    <div className={styles.profile}>
      <Avatar src="https://github.com/orenatodos.png" />

      <strong>Renato Silva</strong>
      <span>Software Engineer</span>
    </div>

    <footer>
      <a href="/">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
)
