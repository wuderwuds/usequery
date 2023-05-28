export const expenciveFunc = (number) => {
  let rnd = 0
  for (let index = 0; index < 2e8; index++) {
    rnd = Math.random()
  }

  return number + rnd
}
