import { Avatar } from '../Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export const Post = () => (
  <article className={styles.wrapper}>
    <header>
      <div className={styles.author}>
        <Avatar src="https://github.com/orenatodos.png" />

        <div className={styles.authorInfo}>
          <strong>Renato Silva</strong>
          <span>Software Engineer</span>
        </div>
      </div>

      <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">
        Publica há 1h
      </time>
    </header>

    <main className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>
        Acabei de subir mais um projeto no meu portifa. É um projeto que
        fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
      </p>
      <p>
        👉 <a href="/"> jane.design/doctorcare</a>
      </p>
      <p>
        <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>
      </p>
    </main>

    <footer>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <div className={styles.buttonWrapper}>
          <button type="submit">Publicar</button>
        </div>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </footer>
  </article>
)
