export function extractInterchanges(text) {
  const lines = text.split('<div style="font-size:0.9em">');
  const interchanges = lines
    .filter((line) => {
      return line.includes("exit") || line.includes("ramp");
    })
    .map((line) => {
      // Extract the interchange name from the line
      const startIndex = line.indexOf("<b>") + 3;
      const endIndex = line.indexOf("</b>");
      return line.substring(startIndex, endIndex);
    });
  return interchanges;
}
