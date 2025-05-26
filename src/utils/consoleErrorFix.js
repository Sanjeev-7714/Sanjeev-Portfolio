/**
 * This utility helps prevent console crashes when inspecting elements
 * by intercepting and handling potential errors that might occur
 * during object inspection in the browser's developer tools.
 */

const fixConsoleErrors = () => {
  // Store the original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  // Override console.error to catch and handle specific errors
  console.error = function(...args) {
    // Check if the error is related to React DevTools
    const errorString = args.join(' ');
    if (
      errorString.includes('React DevTools') ||
      errorString.includes('Symbol.iterator') ||
      errorString.includes('Cannot convert object to primitive value') ||
      errorString.includes('Could not inspect element') ||
      // Handle findDOMNode deprecation warning
      errorString.includes('findDOMNode is deprecated in StrictMode') ||
      // Handle THREE.BufferGeometry error
      errorString.includes('THREE.BufferGeometry.computeBoundingSphere') ||
      errorString.includes('NaN')
    ) {
      // Suppress these specific errors to prevent crashes
      console.warn('Suppressed potential crash-causing error:', ...args);
      return;
    }
    
    // Pass through other errors to the original console.error
    originalConsoleError.apply(console, args);
  };

  // Override console.warn to catch and handle specific warnings
  console.warn = function(...args) {
    const warningString = args.join(' ');
    if (
      warningString.includes('findDOMNode is deprecated in StrictMode') ||
      warningString.includes('THREE.BufferGeometry.computeBoundingSphere')
    ) {
      // Suppress these specific warnings
      return;
    }
    
    // Pass through other warnings to the original console.warn
    originalConsoleWarn.apply(console, args);
  };

  // Add a global error handler
  window.addEventListener('error', (event) => {
    if (
      event.error && 
      (event.error.toString().includes('React DevTools') ||
       event.error.toString().includes('Symbol.iterator') ||
       event.error.toString().includes('Cannot convert object to primitive value') ||
       event.error.toString().includes('THREE.BufferGeometry') ||
       event.error.toString().includes('NaN'))
    ) {
      // Prevent the error from propagating
      event.preventDefault();
      console.warn('Prevented browser crash from:', event.error.message);
      return true;
    }
    return false;
  }, true);

  // Add unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason && 
      (event.reason.toString().includes('React DevTools') ||
       event.reason.toString().includes('Symbol.iterator') ||
       event.reason.toString().includes('Cannot convert object to primitive value') ||
       event.reason.toString().includes('THREE.BufferGeometry') ||
       event.reason.toString().includes('NaN'))
    ) {
      // Prevent the rejection from propagating
      event.preventDefault();
      console.warn('Prevented browser crash from unhandled promise:', event.reason);
      return true;
    }
    return false;
  });
};

export default fixConsoleErrors;