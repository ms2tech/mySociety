// pages/api/payment.js

export default function handler(req, res) {
  // Extract query parameters from the request
  const queryParams = req.query;

   console.log("WE ARE IN SUCCESS URL")
   console.log("PARFAMS IN SUCCESS URL", queryParams)

  // Return query parameters along with a message

  res.status(200).json({
    message: "Payment Successful",
    queryParams, // Include the query parameters in the response
  });
}
