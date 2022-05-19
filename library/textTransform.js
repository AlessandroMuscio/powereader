export const bionicText = (text) => {
  //remove extra spaces from text
  text = text.trim();
  const words = text.split(" ");
  const bionicWords = words.map((word) => {
    const firstHalf = word.slice(0, word.length / 2);
    const secondHalf = word.slice(word.length / 2);
    return `<b>${firstHalf}</b>${secondHalf}`;
  });
  return `<div>${bionicWords.join(" ")}</div>`;
};

export const bionicTextMarkdown = (text) => {
  text = text.trim();
  const words = text.split(" ");
  const bionicWords = words.map((word) => {
    const firstHalf = word.slice(0, word.length / 2);
    const secondHalf = word.slice(word.length / 2);
    return `**${firstHalf}**${secondHalf}`;
  });
  return `${bionicWords.join(" ")}`;
};
