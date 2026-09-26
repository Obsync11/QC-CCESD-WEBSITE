// Google Apps Script API integration template.
// Set this to your deployed Apps Script /exec URL.
const ACCOUNT_API_URL = 'https://script.google.com/macros/s/AKfycbzmZpOY3J_NqJToQLCpLvjVQNsb-Welk9zbka-WI9vCjDeWGtPhG0TaXaYTc87jPRmz1g/exec';

async function accountApi(payload) {
  const response = await fetch(ACCOUNT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  if (!data.ok) throw new Error(data.error || 'Account API request failed.');
  return data;
}
