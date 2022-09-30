import './assets/styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Renato Silva',
      avatarUrl: 'https://github.com/orenatodos.png',
      role: 'Software Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'Meu github',
        href: 'https://github.com/orenatodos'
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'Meu github',
        href: 'https://github.com/diego3g'
      }
    ],
    publishedAt: new Date('2022-05-10 16:41:23')
  }
]

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
