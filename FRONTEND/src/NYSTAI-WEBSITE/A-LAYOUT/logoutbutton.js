import React from 'react';
import { useAuth } from '../CONTEXT AUTH/authContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/nystai-home');
    };

    // Only show logout button if user is authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={handleLogout}
                style={{
                    background: '#1b6763',
                    width: "50%",
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}
                className="logout-btn"
            >
                Logout
            </Button>
        </>
    );
};

export default LogoutButton;