export const getCurrentDate = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return `${day} ${monthNames[month]} ${year}`;
};
export const geCurrentDay = (value: string, reduction: boolean) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const smallDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  if (reduction) {
    return smallDays[new Date(value).getDay()];
  } else {
    return days[new Date().getDay()];
  }
};

export const getDayAndMonth = (value: string) => new Date(value).toLocaleString().slice(0, 5);
