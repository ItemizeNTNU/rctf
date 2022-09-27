export const parseDifficulty = (description) => {
  const regexp = new RegExp('(?<=<difficulty style="display: none">)(.*?)(?=</difficulty>)')
  const match = regexp.exec(description)
  if (match) return match[0] ?? 'beginner'
  return 'beginner'
}
