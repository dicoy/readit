export const timeAgoFormat = timestamp => {
  const now = new Date();
  const then = new Date(timestamp * 1000);
  const secondsPast = (now.getTime() - then.getTime()) / 1000;
  return secondsPast < 60
  ? `${parseInt(secondsPast)} seconds ago` 
  : secondsPast < 3600
  ? `${parseInt(secondsPast / 60)} minutes ago`
  : secondsPast <= 86400
  ? `${parseInt(secondsPast / 3600)} hours ago`
  : then.toDateString()
};