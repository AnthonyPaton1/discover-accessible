import axios from "axios";

const PAYPAL_API_URL =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

/**
 * Get an access token from PayPal
 */
export const getPayPalAccessToken = async () => {
  try {
    const response = await axios({
      method: "post",
      url: `${PAYPAL_API_URL}/v1/oauth2/token`,
      auth: {
        username: PAYPAL_CLIENT,
        password: PAYPAL_SECRET,
      },
      params: {
        grant_type: "client_credentials",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching PayPal access token:", error);
    throw new Error("Failed to retrieve PayPal access token.");
  }
};

/**
 * Capture PayPal Order
 * @param {string} orderID - PayPal order ID
 */
export const capturePayPalOrder = async (orderID) => {
  const accessToken = await getPayPalAccessToken();

  try {
    const response = await axios({
      method: "post",
      url: `${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error capturing PayPal order:",
      error.response?.data || error.message
    );
    throw new Error("Failed to capture PayPal order.");
  }
};
