export function getRgbValues(gradientString: string) {
    // Regular expression to match 'rgb(...)' patterns in the string
    const rgbRegex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/g;
    const matches = [];
    
    let match;
    while ((match = rgbRegex.exec(gradientString)) !== null) {
      // Extract each RGB component and convert them to numbers
      const [r, g, b] = match.slice(1).map(Number);
      matches.push({ r, g, b });
    }
  
    return matches;
  }