// utils/dateUtils.js
export const timeAgo = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
  
  // Define time intervals in seconds
  const intervals = {
    // year: 31536000,
    month: 2592000,week: 604800,
    day: 86400,hour: 3600,
    minute: 60,second: 1
  };
  
  // Calculate the time difference
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    
    if (interval >= 1) {
      return interval === 1 ? `${interval} ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }
  
  return 'just now';
};

export const formatRelativeTime = (date, options = {}) => {
  const {
    withSuffix = true,
    includeSeconds = false,
    shortFormat = false
  } = options;
  
  const now = new Date();
  const inputDate = new Date(date);
  const diffInSeconds = Math.floor((now - inputDate) / 1000);
  const absDiff = Math.abs(diffInSeconds);
  
  const timeFormats = [
    [60, 'second', 'seconds'],
    [3600, 'minute', 'minutes'],
    [86400, 'hour', 'hours'],
    [604800, 'day', 'days'],
    [2592000, 'week', 'weeks'],
    [31536000, 'month', 'months'],
    [Infinity, 'year', 'years']
  ];
  
  const suffix = diffInSeconds < 0 ? 'from now' : 'ago';
  
  for (const [seconds, singular, plural] of timeFormats) {
    if (absDiff < seconds) continue;
    
    const interval = Math.floor(absDiff / seconds);
    const unit = interval === 1 ? singular : plural;
    
    if (shortFormat) {
      return `${interval}${unit.charAt(0)}${withSuffix ? suffix.charAt(0) : ''}`;
    }
    
    return withSuffix 
      ? `${interval} ${unit} ${suffix}`
      : `${interval} ${unit}`;
  }
  
  return includeSeconds 
    ? withSuffix 
      ? 'just now' 
      : 'now'
    : 'less than a minute ago';
};



