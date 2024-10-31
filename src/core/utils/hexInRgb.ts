export function hexToRgb(hex: string, opacity?: number): string {
    // Remove the hash (#) at the start if it's there
    hex = hex.replace(/^#/, '');
  
    // Parse r, g, b values from hex code
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16) - 70;
    const b = parseInt(hex.substring(4, 6), 16);
  
    // If opacity is provided, return as rgba; otherwise, return as rgb
    if (opacity !== undefined) {
      return `rgba(${r}, ${g}, ${b}, ${opacity}%)`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  }