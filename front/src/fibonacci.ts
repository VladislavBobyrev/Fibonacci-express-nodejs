export const inistallFibonacci = () => {
  const inputEl = document.querySelector<HTMLInputElement>('#fib-index')
  const resultEl = document.querySelector('#fib-result')
  const button = document.querySelector('#fib-go')

  if (!inputEl || !resultEl || !button) {
    throw new Error('no elements')
  }

  button.addEventListener('click', async () => {
    const index = parseInt(inputEl.value)

    const res = await fetch(`/api/get-fibonacci?index=${index}`)
    const { success, result } = await res.json()

    resultEl.innerHTML = success ? result : 'Fail!'
  })
}
