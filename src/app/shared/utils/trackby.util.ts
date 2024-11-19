export function trackById<T extends { id: number | string }>(
  _: number,
  item: T
): number | string {
  return item.id;
}
