import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.wrapper}>
      <img src="https://github.com/orenatodos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renato Silva</strong>
              <time
                title="11 de Maio ás 08:13h"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
