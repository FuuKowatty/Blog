  export function getFormattedDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  
    return formattedDate;
  }
  