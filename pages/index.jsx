import Head from 'next/head'
import styles from "../styles/App.module.css"
import { Notification } from './components/Notification'
const notifications = [
  {
    id: 1,
    authorName: 'webster ribeiro',
    authorUrl: 'https://avatars.githubusercontent.com/u/34650824?s=400&v=4',
    // time: Date(),
    seem: true,
  },
  {
    id: 2,
    authorName: 'Tiago ribeiro',
    authorUrl: 'https://github.com/maykbrito.png',
    // time: Date(),
    seem: true,
  }
]

export default function Home() {
  return (
    <div className={styles.card}>
      <header>
        <h2>Notificações <span>2</span></h2>
        <a href='#'>Marcar todas como lidas</a>
      </header>
      <main className={styles.content}>
        {notifications.map(notifications => {
          return(
            <Notification
              key={notifications.id}
              authorName={notifications.authorName}
              authorUrl={notifications.authorUrl}
              seem={notifications.seem}
            />
          );
        })}
      </main>
    </div>
  )
}
