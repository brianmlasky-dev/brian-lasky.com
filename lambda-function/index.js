const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  console.log('=== LAMBDA INVOKED ===');
  console.log('Event:', JSON.stringify(event, null, 2));

  try {
    let body;
    
    if (typeof event.body === 'string') {
      body = JSON.parse(event.body);
    } else if (typeof event.body === 'object') {
      body = event.body;
    } else {
      body = event;
    }

    console.log('Parsed body:', body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log('Validation failed: missing fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
      };
    }

    const params = {
      Source: 'Brian.lasky@outlook.com',  // ✅ CHANGED: Use verified email
      Destination: { ToAddresses: ['Brian.lasky@outlook.com'] },
      Message: {
        Subject: { Data: `New Contact Form Submission from ${name}` },
        Body: {
          Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` }
        }
      }
    };

    console.log('SES params:', JSON.stringify(params, null, 2));
    console.log('Attempting to send email via SES...');

    const result = await ses.sendEmail(params).promise();
    
    console.log('Email sent successfully! MessageId:', result.MessageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        messageId: result.MessageId 
      })
    };
  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', JSON.stringify(error, null, 2));

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        code: error.code 
      })
    };
  }
};
