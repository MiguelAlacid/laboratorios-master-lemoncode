let apiUrl: string = import.meta.env.VITE_API_URL

export function setupCounter(element: HTMLButtonElement) {
  console.log('api', apiUrl)

  let counter: number = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

