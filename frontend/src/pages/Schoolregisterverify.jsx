import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SchoolRegisterVerify = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(10); // 10-second timer for resend
  const [canResend, setCanResend] = useState(false); // Disable resend initially
  const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP has been sent
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://studentdropoutanalysis-2.onrender.com/send-otp', { email }); // Send email to request OTP
      if (res.data.success) {
        setMessage('OTP sent successfully');
        setOtpSent(true); // Set flag indicating OTP was sent
        setCanResend(false); // Disable resend initially
        setTimer(10); // Reset timer to 10 seconds
      } else {
        setMessage('Failed to send OTP');
      }
    } catch (err) {
      console.error('Error during OTP sending:', err);
      setMessage('An error occurred while sending OTP');
    }
  };

  // Handle OTP submission
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/verify-otp', { otp, email }); // Include email in the request
      if (res.data.success) {
        setMessage('OTP verified successfully');
        navigate('/schoollogin'); // Redirect to /schoollogin on successful verification
      } else {
        setMessage('Invalid OTP');
      }
    } catch (err) {
      console.error('Error during OTP verification:', err);
    }
  };

  // Handle Resend OTP
  const handleResendOtp = async () => {
    try {
      const res = await axios.post('/resend-otp', { email }); // Include email in the request
      if (res.data.success) {
        setMessage('OTP resent successfully');
        setCanResend(false); // Disable resend
        setTimer(10); // Reset timer to 10 seconds
      } else {
        setMessage('Failed to resend OTP');
      }
    } catch (err) {
      console.error('Error during OTP resend:', err);
      setMessage('An error occurred while resending OTP');
    }
  };

  // useEffect to manage the timer countdown
  useEffect(() => {
    let countdown;
    if (!canResend && otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setCanResend(true); // Enable resend when the timer hits 0
    }

    return () => clearInterval(countdown); // Cleanup timer on unmount
  }, [timer, canResend, otpSent]);

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Verify OTP</h2>
        <form onSubmit={handleSendOtp} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          {!otpSent && (
            <button type="submit" style={styles.button}>Generate OTP</button>
          )}
        </form>
        {otpSent && (
          <form onSubmit={handleVerifyOtp} style={styles.form}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Verify</button>
            {canResend ? (
              <button
                onClick={handleResendOtp}
                style={styles.resendButton}
              >
                Resend OTP
              </button>
            ) : (
              <p style={styles.message}>Resend OTP in {timer}s</p>
            )}
          </form>
        )}
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f6f9',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  message: {
    marginTop: '20px',
    color: '#ff4d4f',
  },
  resendButton: {
    padding: '12px',
    fontSize: '16px',
    marginTop: '20px',
    borderRadius: '4px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SchoolRegisterVerify;
