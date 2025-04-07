// utils/dateUtils.js
export const formatDate = (date) => {
    if (!date) return null;
    
    // If date is already a Date object or can be converted to one
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return null; // Invalid date
    
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };