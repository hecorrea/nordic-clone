export const errorMidleware = (req, res, next) => {
  res.send('Error: rendering failed')
}