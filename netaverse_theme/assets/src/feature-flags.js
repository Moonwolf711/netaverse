import flags from '../flags.json';

export function runFlags() {
  if (flags.enableExperiments) {
    console.log('Experiments enabled');
  }
}
