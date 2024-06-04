/**
 * @message
 * The response/error message string.
 *
 * @provided_value
 * The value that was provided to the API that resulted in the error.
 */
export interface MessageResponse {
  message: string;
  summary?: string;
  provided_value?: any;
}

/**
 * @message
 * The response/error message string.
 *
 * @result
 * An object that contains the resource's updated values
 */
export interface MessageWithResultResponse {
  message: string;
  result: Record<string, any>;
}
