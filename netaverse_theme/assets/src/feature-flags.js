let flags = {};

export async function loadFlags() {
  const response = await fetch('../flags.json');
  if (!response.ok) {
    throw new Error('Failed to load flags.json');
  }
  flags = await response.json();
}
export function runFlags() {
  if (flags.enableExperiments) {
    console.log('Experiments enabled');
  }
}
