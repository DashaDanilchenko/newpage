import photo from './myPhoto.jpg'
import styles from './FirstPage.module.css'

const FirstPage = () => {
  return (
    <div className={styles.background}>    
        <img src={photo} alt="myPhoto" className={styles.photo}></img>
        <h2  className={styles.name}>Данильченко Дар'я</h2>
        <h1 className={styles.vacancy}>Front-end Engineer</h1> 
    </div>
  )
}

export default FirstPage