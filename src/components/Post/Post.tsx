import React, { FormEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

type ParagraphType = {
  type: 'paragraph'
  content: string
}

type LinkType = {
  type: 'link'
  content: string
  href: string
}

type PostContent = ParagraphType[] | LinkType[]

export type PostProps = {
  author: {
    name: string
    avatarUrl: string
    role: string
  }
  content: PostContent
  publishedAt: Date
}

const htmlElements = {
  paragraph: (content: string) => <p>{content}</p>,
  link: (content: string, href: string) => (
    <p>
      <a href={href}>{content}</a>
    </p>
  )
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
  const publishedDateFormatted = format(
    publishedAt,
    `d 'de' LLLL 'ás' HH:mm'h'`,
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <main className={styles.content}>
        {content.map((line, index) => (
          <React.Fragment key={index}>
            {line.type === 'paragraph' && (
              <>{htmlElements[line.type](line.content)}</>
            )}
            {line.type === 'link' && (
              <>{htmlElements[line.type](line.content, line.href)}</>
            )}
          </React.Fragment>
        ))}
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
}
