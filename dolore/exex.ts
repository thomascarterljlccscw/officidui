function processCondition(c: boolean): void {
  if (c) {
    // Assuming 'c' is a condition that, when true, should execute some logic
    handleTrueCondition();
  } else {
    // If 'c' is false, handle the alternative case
    handleFalseCondition();
  }
}

function handleTrueCondition(): void {
  // Logic to be executed when the condition is true
  console.log('Condition is true.');
}

function handleFalseCondition(): void {
  // Logic to be executed when the condition is false
  console.log('Condition is false.');
}
