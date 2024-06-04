/**
 * @message
 * The error's message string.
 *
 * @stack
 * Stack trace information. This is disabled in production environments.
 *
 * @details
 * Nothing about lightspeed's api is consistent or standardized, so the
 * entire error is thrown into this details object...
 *
 * @zod_errors
 * These errors occur when a property fails to validate during a
 * route's validateRequest() middleware.
 */
export default interface ErrorResponse {
  message: string;
  stack?: string;
  details?: Record<string, any>;
  zod_errors?: { path: string; message: string }[];
}
