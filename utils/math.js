export const percentager = (current, total, percent=100 ) => {
  return Math.floor((current / total) * percent )
}