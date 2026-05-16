/**
 * codeValidator.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Frontend-safe Python code validation engine.
 * NO code is executed — validation uses:
 *   • String normalization (whitespace, quote style)
 *   • Exact match after normalizing
 *   • Regex pattern matching
 *   • Keyword/token presence checks
 *   • Multi-accepted-answer arrays
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Normalize a code string for comparison:
 *  - trim whitespace
 *  - collapse multiple spaces to one
 *  - normalize quotes (" → ')
 *  - lowercase
 */
export function normalize(code) {
  return code
    .trim()
    .replace(/\s+/g, ' ')        // collapse whitespace
    .replace(/"/g, "'")          // normalize double → single quotes
    .toLowerCase();
}

/** Check if code exactly matches any of the accepted answers (normalized). */
export function exactMatch(userCode, acceptedAnswers) {
  const userNorm = normalize(userCode);
  return acceptedAnswers.some(ans => normalize(ans) === userNorm);
}

/** Check if code contains all required tokens (case-insensitive). */
export function containsAll(userCode, requiredTokens) {
  const lower = userCode.toLowerCase();
  return requiredTokens.every(tok => lower.includes(tok.toLowerCase()));
}

/** Check if code matches a given regex pattern. */
export function matchesPattern(userCode, pattern) {
  return pattern.test(userCode);
}

/**
 * Main validation function.
 *
 * A challenge's `validator` field defines how to check the answer:
 *
 * validator: {
 *   type: 'exact' | 'contains' | 'regex' | 'multi',
 *   accepted?: string[],       // for 'exact' and 'multi'
 *   tokens?: string[],         // for 'contains'
 *   pattern?: RegExp,          // for 'regex'
 *   minLength?: number,        // optional minimum code length
 * }
 *
 * Returns: { valid: boolean, feedback: string }
 */
export function validateCode(userCode, validator) {
  if (!userCode || userCode.trim().length === 0) {
    return { valid: false, feedback: "❌ Write your code first!" };
  }

  if (validator.minLength && userCode.trim().length < validator.minLength) {
    return { valid: false, feedback: `❌ Too short! Write at least ${validator.minLength} characters.` };
  }

  switch (validator.type) {

    case 'exact': {
      const ok = exactMatch(userCode, validator.accepted || []);
      return ok
        ? { valid: true,  feedback: "✅ Perfect! That's exactly right!" }
        : { valid: false, feedback: "❌ Not quite. Check your syntax and try again." };
    }

    case 'contains': {
      const missing = (validator.tokens || []).filter(
        tok => !userCode.toLowerCase().includes(tok.toLowerCase())
      );
      if (missing.length === 0) {
        return { valid: true, feedback: "✅ Great! All the right pieces are there." };
      }
      return { valid: false, feedback: `❌ Missing: ${missing.map(t => `\`${t}\``).join(', ')}` };
    }

    case 'regex': {
      const ok = matchesPattern(userCode, validator.pattern);
      return ok
        ? { valid: true,  feedback: "✅ Correct! Pattern matched." }
        : { valid: false, feedback: validator.failMessage || "❌ Pattern doesn't match. Try again." };
    }

    case 'multi': {
      // All sub-validators must pass
      const results = (validator.checks || []).map(check => validateCode(userCode, check));
      const failed = results.filter(r => !r.valid);
      if (failed.length === 0) {
        return { valid: true, feedback: "✅ Excellent! Everything checks out!" };
      }
      return { valid: false, feedback: failed[0].feedback };
    }

    default:
      return { valid: false, feedback: "❌ Unknown validator type." };
  }
}

/**
 * Hint system — reveals hints progressively based on attempt count.
 * hints: string[]
 * attemptCount: number
 * Returns the hint to show (or null).
 */
export function getHint(hints, attemptCount) {
  if (!hints || hints.length === 0) return null;
  if (attemptCount <= 0) return null;
  // First hint after 2 attempts, next hints every 2 more attempts
  const idx = Math.min(Math.floor((attemptCount - 1) / 2), hints.length - 1);
  return hints[idx];
}
