import React, {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useState
} from 'react'
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
  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState('')

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

  const handleNewCommentChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments((prevState) => [...prevState, newCommentText])

    setNewCommentText('')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWhitoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    )

    setComments(commentsWhitoutDeletedOne)
  }

  const isNewCommentEmpty = !newCommentText

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
        <form
          onSubmit={handleCreateNewComment}
          className={styles.commentForm}
        >
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="Escreva um comentário..."
            onChange={handleNewCommentChange}
            value={newCommentText}
            required
            onInvalid={handleNewCommentInvalid}
          />

          <div className={styles.buttonWrapper}>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </div>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      </footer>
    </article>
  )
}
