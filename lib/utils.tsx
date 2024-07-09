export const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

export const formatDateRange =(startDate:string, endDate:string) => {
    const formatDate = (dateString:string) => {
      const date = new Date(dateString);
      const options:Object = { day: 'numeric', month: 'short' };
      return date.toLocaleDateString('en-US', options);
    }
  
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
  
    return `${formattedStartDate} - ${formattedEndDate}`;
  }