export default function guardrail(mathFunction) {
  const array = [];
  try {
    array.push(mathFunction());
  } catch (error) {
    array.push(`Error: ${error.message}`);
  }
  array.push('Guardrail was processed');
  return array;
}
