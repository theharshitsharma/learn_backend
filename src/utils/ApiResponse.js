class ApiResponse {
  constructor(res, data, message, statusCode) {
    this.res = res;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }

  send() {
    this.res.status(this.statusCode).json({
      success: true,
      message: this.message,
      data: this.data,
    });
  }

  static error(res, message, statusCode = 500) {
    res.status(statusCode).json({
      success: false,
      message,
    });
  }
}

export default ApiResponse;
