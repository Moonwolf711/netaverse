export function initNebula(options = {}) {
  // Consolidated nebula shader initialization
  const { vertex = '', fragment = '' } = options;
  return {
    vertex,
    fragment
  };
}
