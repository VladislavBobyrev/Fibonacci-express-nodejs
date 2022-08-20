module.exports = res => result => {
  res.send(JSON.stringify({
    success: Number.isFinite(result),
    result
  }))
}