export function scopeSelectors(prefix, cssStyleSheet) {
    // Split the stylesheet into individual rules
    const rules = cssStyleSheet.split(/(?<=})/);

    const modifiedRules = [];

    // Process each rule
    rules.forEach((rule) => {
      // Find the selector and properties in each rule
      const match = rule.match(/(.*?){([\s\S]*)}/);

      if (!match) {
        modifiedRules.push(rule); // Push the original rule if it doesn't match the pattern
        return;
      }

      const [_, selector, properties] = match;

      // Check if the rule is an @media rule
      if (selector.trim().startsWith('@media')) {
        modifiedRules.push(rule); // Push the original @media rule without modification
        return;
      }

      // Replace the selector with the prefix
      const prefixedSelector = `${prefix} ${selector.trim()}`;

      // Create the modified rule
      const modifiedRule = `${prefixedSelector} {${properties}}`;

      modifiedRules.push(modifiedRule); // Push the modified rule to the componentStyles array
    });

    return modifiedRules.join('\n');
}

export function css(css, prefix) {
    if (Array.isArray(css)) {
        return css.join('');
    } else {
      return css;
    }
}