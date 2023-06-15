export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US').format(new Date(dateString))
}