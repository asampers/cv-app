function formatDate(date) {
  return new Date(date + '-1').toLocaleDateString('en-us', { year:"numeric", month:"short"})
}

export { formatDate };