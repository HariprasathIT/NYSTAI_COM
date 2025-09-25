import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from '../CONTEXT AUTH/authContext';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        showAuthModal,
        setShowAuthModal,
        pendingRoute,
        setPendingRoute,
        setAuthenticatedUser
    } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [isLogin, setIsLogin] = useState(true);
    const [currentStep, setCurrentStep] = useState('auth');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [resetToken, setResetToken] = useState('');

    // Resend OTP states
    const [resendLoading, setResendLoading] = useState(false);
    const [resendCountdown, setResendCountdown] = useState(0);
    const [canResend, setCanResend] = useState(true);

    const navigate = useNavigate();

    // Debug logging
    useEffect(() => {
        console.log('Login component state:', {
            showAuthModal,
            pendingRoute,
            currentStep,
            timestamp: new Date().toLocaleTimeString()
        });
    }, [showAuthModal, pendingRoute, currentStep]);

    // Countdown timer for resend OTP
    useEffect(() => {
        let timer;
        if (resendCountdown > 0) {
            timer = setTimeout(() => {
                setResendCountdown(resendCountdown - 1);
            }, 1000);
        } else if (resendCountdown === 0 && !canResend) {
            setCanResend(true);
        }
        return () => clearTimeout(timer);
    }, [resendCountdown, canResend]);

    const handleClose = () => {
        console.log('Modal closing, redirecting to homepage...');
        setShowAuthModal(false);
        setPendingRoute(null);
        resetForm();
        navigate('/nystai-home', { replace: true });
    };

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
            name: '',
            otp: '',
            newPassword: '',
            confirmPassword: ''
        });
        setError('');
        setSuccess('');
        setCurrentStep('auth');
        setIsLogin(true);
        setResetToken('');
        setResendCountdown(0);
        setCanResend(true);
    };

    const handleBackToAuth = () => {
        setCurrentStep('auth');
        setError('');
        setSuccess('');
        setFormData(prev => ({
            ...prev,
            otp: '',
            newPassword: '',
            confirmPassword: ''
        }));
        setResendCountdown(0);
        setCanResend(true);
    };

    const handleForgotPasswordClick = () => {
        setCurrentStep('forgot');
        setError('');
        setSuccess('');
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email) {
            setError('Please enter your email address');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('OTP sent to your email successfully!');
                setCurrentStep('verify-otp');
                // Start countdown timer
                setResendCountdown(60);
                setCanResend(false);
            } else {
                setError(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            console.error('Forgot Password Error:', error);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        if (!formData.email) {
            setError('Email is required to resend OTP');
            return;
        }

        setError('');
        setSuccess('');
        setResendLoading(true);

        try {
            const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('OTP resent to your email successfully!');
                // Reset countdown
                setResendCountdown(60);
                setCanResend(false);
                // Clear OTP field
                setFormData(prev => ({ ...prev, otp: '' }));
            } else {
                setError(data.message || 'Failed to resend OTP');
            }
        } catch (error) {
            console.error('Resend OTP Error:', error);
            setError('Network error. Please try again.');
        } finally {
            setResendLoading(false);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!formData.otp) {
            setError('Please enter the OTP');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/auth/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    otp: formData.otp
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('OTP verified successfully!');
                setResetToken(data.token);
                setCurrentStep('reset-password');
            } else {
                setError(data.message || 'Invalid or expired OTP');
            }
        } catch (error) {
            console.error('Verify OTP Error:', error);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!formData.newPassword || !formData.confirmPassword) {
            setError('Please fill in both password fields');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await fetch(`https://nystai-com-dashboarad.onrender.com/api/auth/reset-password/${resetToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newPassword: formData.newPassword
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Password reset successfully! Please login with your new password.');
                setTimeout(() => {
                    resetForm();
                }, 2000);
            } else {
                setError(data.message || 'Failed to reset password');
            }
        } catch (error) {
            console.error('Reset Password Error:', error);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                // LOGIN API REQUEST
                const loginResponse = await fetch('https://nystai-com-dashboarad.onrender.com/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password
                    }),
                });

                const loginData = await loginResponse.json();

                if (loginResponse.ok) {
                    console.log('Login successful', loginData);

                    setAuthenticatedUser(
                        {
                            email: formData.email,
                            role: loginData.role,
                            ...loginData.user
                        },
                        loginData.token
                    );

                    setShowAuthModal(false);

                    setTimeout(() => {
                        if (loginData.redirectUrl) {
                            console.log('Navigating to role-based route:', loginData.redirectUrl);
                            navigate(loginData.redirectUrl, { replace: true });
                        }
                        else if (pendingRoute) {
                            console.log('Navigating to pending route:', pendingRoute);
                            navigate(pendingRoute, { replace: true });
                            setPendingRoute(null);
                        }
                        else {
                            const defaultRoute = loginData.role === 'ADMIN' ? '/admin' : '/nystai-product';
                            console.log('Navigating to default role route:', defaultRoute);
                            navigate(defaultRoute, { replace: true });
                        }
                    }, 100);

                } else {
                    setError(loginData.message || 'Login failed');
                }

            } else {
                // REGISTRATION API REQUEST
                const registerResponse = await fetch('https://nystai-com-dashboarad.onrender.com/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    }),
                });

                const registerData = await registerResponse.json();

                if (registerResponse.ok) {
                    console.log('Registration successful');
                    setIsLogin(true);
                    setError('Registration successful! Please login.');
                    setFormData({ ...formData, name: '' });
                } else {
                    setError(registerData.message || 'Registration failed');
                }
            }
        } catch (error) {
            console.error('API Error:', error);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
        if (success) setSuccess('');
    };

    const renderAuthForm = () => (
        <>
            <div className='' style={{ display: "flex", justifyContent: "center" }}>
                <img src='IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/nystai-colored-logo.png' alt='Nystai-logo' className='img-fluid' style={{ height: "50px" }} />
            </div>

            <div className="text-center">
                <h5 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "15px" }}>
                    {isLogin ? 'Welcome Back' : 'Welcome To Nystai'}
                </h5>
                <p style={{ color: "#8c8c8c", fontSize: "13px" }}>
                    {isLogin ? 'Please login your account' : 'Please create your account'}
                </p>
            </div>

            <Form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <Form.Group className="mb-3">
                        <Form.Label className="auth-label">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your Name"
                            className="auth-input"
                            disabled={loading}
                            style={{
                                border: "1px solid #8d8d8d",
                                borderRadius: "10px",
                                padding: "12px 15px",
                                fontSize: "12px"
                            }}
                        />
                    </Form.Group>
                )}

                <Form.Group className="mb-3">
                    <Form.Label className="auth-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="auth-input"
                        disabled={loading}
                    />
                </Form.Group>

                <Form.Group className="mb-3" style={{ position: "relative" }}>
                    <Form.Label className="auth-label">Password</Form.Label>
                    <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your password"
                        className="auth-input"
                        disabled={loading}
                        style={{ paddingRight: "40px", fontSize: "12px" }}
                    />

                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "40px",
                            cursor: "pointer",
                            color: "#666",
                            fontSize: "12px"
                        }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </Form.Group>

                {isLogin && (
                    <div className="text-end">
                        <button
                            type="button"
                            onClick={handleForgotPasswordClick}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#ff5050",
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "none"
                            }}
                            disabled={loading}
                        >
                            Forgot Password?
                        </button>
                    </div>
                )}

                <div className="d-grid gap-2 pt-2">
                    <Button type="submit" className="auth-submit-btn" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                {isLogin ? 'Logging in...' : 'Creating Account...'}
                            </>
                        ) : (
                            isLogin ? 'Login' : 'Create Account'
                        )}
                    </Button>
                </div>
            </Form>

            {(error || success) && (
                <Alert variant={error ? 'danger' : 'success'} className="mt-4">
                    {error || success}
                </Alert>
            )}
        </>
    );

    const renderForgotPasswordForm = () => (
        <>
            <div className='' style={{ display: "flex", justifyContent: "center" }}>
                <img src='IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/nystai-colored-logo.png' alt='Nystai-logo' className='img-fluid' style={{ height: "50px" }} />
            </div>

            <h5 style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", marginTop: "15px" }}>
                Password Reset
            </h5>
            <p style={{ color: "#8c8c8c", fontSize: "14px", marginBottom: "20px", textAlign: "center" }}>
                Forgot Password
            </p>

            <div className="d-flex align-items-center mb-3">
                <Button
                    type="button"
                    onClick={handleBackToAuth}
                    className='auth-submit-btn mt-0'
                    disabled={loading}
                >
                    <FaArrowLeft />
                </Button>
            </div>

            <Form onSubmit={handleForgotPasswordSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label className="auth-label">Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="auth-input"
                        disabled={loading}
                    />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button type="submit" className="auth-submit-btn" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Sending OTP...
                            </>
                        ) : (
                            'Send OTP'
                        )}
                    </Button>
                </div>
            </Form>

            {(error || success) && (
                <Alert variant={error ? 'danger' : 'success'} className="mt-4">
                    {error || success}
                </Alert>
            )}

        </>
    );

    const renderVerifyOTPForm = () => (
        <>
            <div className='' style={{ display: "flex", justifyContent: "center" }}>
                <img src='IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/nystai-colored-logo.png' alt='Nystai-logo' className='img-fluid' style={{ height: "50px" }} />
            </div>

            <h5 style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", marginTop: "15px" }}>
                Verify OTP
            </h5>

            <p style={{ color: "#8c8c8c", fontSize: "14px", marginBottom: "20px", textAlign: "center" }}>
                Enter the 6-digit OTP sent to {formData.email}
            </p>

            <div className="d-flex align-items-center mb-3">
                <Button
                    type="button"
                    onClick={() => setCurrentStep('forgot')}
                    className='auth-submit-btn mt-0'
                    disabled={loading || resendLoading}
                >
                    <FaArrowLeft />
                </Button>
            </div>

            <Form onSubmit={handleVerifyOTP}>
                <Form.Group className="mb-3">
                    {/* <Form.Label className="auth-label">OTP</Form.Label> */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        {[0, 1, 2, 3].map((index) => (
                            <Form.Control
                                key={index}
                                type="text"
                                value={formData.otp[index] || ''}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d?$/.test(value)) {
                                        const newOtp = formData.otp.split('');
                                        newOtp[index] = value;
                                        const updatedOtp = newOtp.join('').slice(0, 4);
                                        setFormData({ ...formData, otp: updatedOtp });

                                        // Auto-focus next input
                                        if (value && index < 3) {
                                            const nextInput = e.target.parentElement.children[index + 1];
                                            if (nextInput) nextInput.focus();
                                        }
                                    }
                                }}
                                onKeyDown={(e) => {
                                    // Handle backspace
                                    if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
                                        const prevInput = e.target.parentElement.children[index - 1];
                                        if (prevInput) prevInput.focus();
                                    }
                                }}
                                required
                                className="auth-input"
                                disabled={loading || resendLoading}
                                maxLength={1}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    textAlign: "center",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    border: "1px solid #8d8d8d",
                                    borderRadius: "8px"
                                }}
                            />
                        ))}
                    </div>
                </Form.Group>

                <div className="d-grid gap-2 mb-3">
                    <Button type="submit" className="auth-submit-btn" disabled={loading || resendLoading}>
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Verifying...
                            </>
                        ) : (
                            'Verify OTP'
                        )}
                    </Button>
                </div>

                {(error || success) && (
                    <Alert variant={error ? 'danger' : 'success'} className="mt-4">
                        {error || success}
                    </Alert>
                )}

                {/* Resend OTP Section */}
                <div className="text-center">
                    <p style={{ color: "#8c8c8c", fontSize: "12px", marginBottom: "10px" }}>
                        Didn't receive the OTP?
                    </p>

                    {canResend ? (
                        <button
                            type="button"
                            onClick={handleResendOTP}
                            disabled={resendLoading || loading}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#ff5050",
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontWeight: "600"
                            }}
                        >
                            {resendLoading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="me-1"
                                    />
                                    Resending...
                                </>
                            ) : (
                                'Resend OTP'
                            )}
                        </button>
                    ) : (
                        <span style={{
                            color: "#8c8c8c",
                            fontSize: "12px",
                            fontWeight: "500"
                        }}>
                            Resend OTP in {resendCountdown}s
                        </span>
                    )}
                </div>
            </Form>
        </>
    );

    const renderResetPasswordForm = () => (
        <>
            <div className='' style={{ display: "flex", justifyContent: "center" }}>
                <img src='IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/nystai-colored-logo.png' alt='Nystai-logo' className='img-fluid' style={{ height: "50px" }} />
            </div>

            <h5 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "15px", textAlign: "center" }}>
                Reset Password
            </h5>

            <p style={{ color: "#8c8c8c", fontSize: "14px", marginBottom: "15px", textAlign: "center" }}>
                Enter your new password
            </p>

            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" style={{ position: "relative" }}>
                    <Form.Label className="auth-label">New Password</Form.Label>
                    <Form.Control
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter new password"
                        className="auth-input"
                        disabled={loading}
                        style={{ paddingRight: "40px", fontSize: "12px" }}
                    />
                    <span
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "40px",
                            cursor: "pointer",
                            color: "#666",
                            fontSize: "12px"
                        }}
                    >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </Form.Group>

                <Form.Group className="mb-2" style={{ position: "relative" }}>
                    <Form.Label className="auth-label">Confirm Password</Form.Label>
                    <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        placeholder="Confirm new password"
                        className="auth-input"
                        disabled={loading}
                        style={{ paddingRight: "40px", fontSize: "12px" }}
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "40px",
                            cursor: "pointer",
                            color: "#666",
                            fontSize: "12px"
                        }}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button type="submit" className="auth-submit-btn" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Resetting Password...
                            </>
                        ) : (
                            'Reset Password'
                        )}
                    </Button>
                </div>
            </Form>

            {(error || success) && (
                <Alert variant={error ? 'danger' : 'success'} className="mt-4">
                    {error || success}
                </Alert>
            )}
        </>
    );

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 'forgot':
                return renderForgotPasswordForm();
            case 'verify-otp':
                return renderVerifyOTPForm();
            case 'reset-password':
                return renderResetPasswordForm();
            default:
                return renderAuthForm();
        }
    };

    return (
        <Modal
            show={showAuthModal}
            onHide={handleClose}
            centered
            className="auth-modal"
            backdrop="static"
            keyboard={false}
        >
            <div className="d-flex" style={{ height: "65vh", width: "100%" }}>
                <div style={{ width: "465px", background: "#fff", position: "relative" }}>
                    {currentStep === 'auth' && (
                        <div style={{
                            position: "absolute",
                            top: "20px",
                            right: "-20px",
                            zIndex: 10,
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "25px",
                            padding: "4px",
                        }}>
                            <button
                                type="button"
                                onClick={() => setIsLogin(true)}
                                disabled={loading}
                                style={{
                                    background: isLogin ? "#ffffff" : "#ffffff",
                                    color: isLogin ? "#ff6b6b" : "#626262",
                                    border: "none",
                                    borderRadius: "20px",
                                    padding: "8px 50px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    minWidth: "70px",
                                }}
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsLogin(false)}
                                disabled={loading}
                                style={{
                                    background: !isLogin ? "#ffffff" : "#ffffff",
                                    color: !isLogin ? "#ff6b6b" : "#626262",
                                    border: "none",
                                    borderRadius: "20px",
                                    padding: "8px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    minWidth: "80px",
                                    marginTop: "10px",
                                }}
                            >
                                Register
                            </button>
                        </div>
                    )}

                    <img
                        src={
                            currentStep === 'auth'
                                ? (isLogin
                                    ? 'IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/form-img-1.png'
                                    : 'IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/form-img-2.jpg'
                                )
                                : currentStep === 'forgot' || currentStep === 'verify-otp' || currentStep === 'reset-password'
                                    ? 'IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/form-img-3.jpg'
                                    : 'IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/form-img-1.png'
                        }
                        className='w-100 h-100 img-fluid'
                        style={{ objectFit: "cover" }}
                        alt='Form background'
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <Modal.Header closeButton className="auth-header">
                    </Modal.Header>
                    <Modal.Body className="auth-body pt-0" style={{ padding: "100px" }}>
                        {renderCurrentStep()}
                    </Modal.Body>
                </div>
            </div>
        </Modal>
    );
};

export default Login;