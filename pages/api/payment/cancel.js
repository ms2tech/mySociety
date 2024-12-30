// pages/api/payment.js

export default function handler(req, res) {
    // Set status code and response headers (if needed)
    console.log('CANCEL URL REACHED')
    res.status(422).json({
      message: "Something went wrong",
    });
  }
  