export interface ResData {
  result: any;
  code: string;
  message: string;
  success: boolean;
  other: object;
}

/**
 * 生成数据接口返回的数据
 * @export
 * @param result
 * @param code
 * @param message
 * @param success
 * @param other
 * @return
 */
export function createResData(result = null, code = '200', message = 'success', success = true, other = {}) {
  return {code, message, success, result, other};
}

/**
 * 生成服务器处理错误的数据
 * @export
 * @param code
 * @param message
 * @return
 */
export function createErrorData(code = '400', message = 'server error') {
  return {code, message, success: false, result: null, other: {}};
}
