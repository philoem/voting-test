const useCutStringAfterSecondSpace = (str: string) => {
  const words = str.split(' ');
  if (words.length > 2) {
    return words.slice(0, 2).join(' ');
  }
  return str;
}

export default useCutStringAfterSecondSpace;