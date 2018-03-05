export function compare(a, b) {
  if (a.likes.legit > b.likes.legit) return -1;
  if (a.likes.legit < b.likes.legit) return 1;
  return 0;
}
