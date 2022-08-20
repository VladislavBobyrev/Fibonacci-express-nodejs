module.exports = index => {
  if (!Number.isFinite(index) || index < 0) {
    return NaN
  }

  let first = 0
  let second = 0

  if (index === 0) {
    return first
  }

  for (let i = 0; i < index; i++){
    const temp = second
    second += first
    first = temp
  }

  return second
}