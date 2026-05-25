// src/logic/openToURL.ts
const openToURL = (url: string) => {
  // Check if we are running in the browser before hitting window
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
};

export default openToURL;