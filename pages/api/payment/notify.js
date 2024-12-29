// pages/api/payment.js

// pages/api/payment.js

export default function handler(req, res) {
  // Extract query parameters from the request
  const queryParams = req.query;


  console.log('QUERY > PARAMS', queryParams)

  // Return query parameters along with a message
  res.status(200).json({
    message: "Hotify Ur;",
    queryParams, // Include the query parameters in the response
  });
}
