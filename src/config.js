// =============================================================================
// Settings
// =============================================================================
export const LOGGING = 1; // 0=none, 1=info, 2=debug
export const MAX_FILE_SIZE_TO_CACHE = 50 * 1024 * 1024; // 50MB
export const DIR_TUTORIAL = "/root/tutorial";
export const URL_ASSETS = "https://assets.sandbox.bio";

// =============================================================================
// Constants
// =============================================================================

// Logging
export const LOGGING_NONE = 0;
export const LOGGING_INFO = 1;
export const LOGGING_DEBUG = 2;

// Tutorials
export const DIR_TUTORIAL_SHORT = DIR_TUTORIAL.replace("/root", "~");

// =============================================================================
// V86 Serial ports for communicating between JS and emulator (UART1, 2)
// =============================================================================

// Command line input from the user go to `serial0-input`, and we can listen to the output bus for the result.
export const BUS_INPUT = "serial0-input";
export const BUS_OUTPUT = "serial0-output-byte";

// Custom sandbox.bio commands like open/download/curl communicate to JS code by outputting a command to /dev/ttyS1
// in the custom .sh files in v86. We listen to commands sent by reading the output bus.
export const FILE_CUSTOM_COMMAND = "/dev/ttyS1";
export const BUS_OUTPUT_CUSTOM_COMMAND = "serial1-output-byte";

// Exercise checking code in JS will execute a command that outputs the result of the exercise check in /dev/ttyS2.
// We then read from the output bus to get the result of the command (only way to know a command is done running, can't await it).
export const FILE_EXERCISE_CHECK = "/dev/ttyS2";
export const BUS_OUTPUT_EXERCISE_CHECK = "serial2-output-byte";

// =============================================================================
// The code below is auto-generated by ./bin/deploy-v86.sh; do not modify!
// =============================================================================

export const DEBIAN_STATE_ID = "b6beadfe28f3ce9734081154a75cc266";
