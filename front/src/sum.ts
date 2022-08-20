export const installSum = () => {
  const firstInputEl = document.querySelector<HTMLInputElement>('#sum-first')
  const secondInputEl = document.querySelector<HTMLInputElement>('#sum-second')

  const resultEl = document.querySelector('#sum-result')
  const button = document.querySelector('#sum-go')

  if (!firstInputEl || !secondInputEl || !resultEl || !button) {
    throw new Error('no elements')
  }

  button?.addEventListener('click', async () => {
    const first = parseInt(firstInputEl?.value)
    const second = parseInt(secondInputEl?.value)

    console.log(first)
    console.log(second)

    const res = await fetch(
      `api/sum-of-two-numbers?first=${first}&second=${second}`
    )

    const { success, result } = await res.json()

    resultEl.innerHTML = success ? result : 'Fail!'
  })
}
