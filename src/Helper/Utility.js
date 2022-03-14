const deepClone = (val) => {
  return JSON.parse(JSON.stringify(val))
}

const Utility = {
  deepClone
}

export default Utility
