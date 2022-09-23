import styles from './Notification.module.css'
import Image from 'next/image'
export function Notification({authorName, authorUrl}){
    return (
        <div className={styles.notification}>
          <div className={styles.perfil}>
            <img src={authorUrl} alt="" className={styles.avatar}/>
          </div>
          <div className={styles.contentPerfil}>
            <label>{authorName} <span>seguiu você</span></label>
            <span>5m atrás</span>
          </div>
        </div>
    );
}