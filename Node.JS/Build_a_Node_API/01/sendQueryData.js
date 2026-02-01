export const sendQueryData = (data, queryObj) => {
  const { continent, country, is_open_to_public } = queryObj

  let result = data

  if (continent) {
    result = result.filter(d =>
      d.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (country) {
    result = result.filter(d =>
      d.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (is_open_to_public !== undefined) {
    const boolVal = is_open_to_public === 'true'
    result = result.filter(d =>
      d.is_open_to_public === boolVal
    )
  }

  return result
}
