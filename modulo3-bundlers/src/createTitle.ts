import styles from './title.module.css'

export function createTitle() {
  const h1 = document.createElement('h1')
  h1.textContent = 'Creación de H1 con css modules'
  h1.className = styles.title

  document.body.appendChild(h1)
}