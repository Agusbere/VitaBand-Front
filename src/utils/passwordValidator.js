// Función para validar si una contraseña es "strong"
export const isStrongPassword = (password) => {
    let score = 0;
    if (password.length > 7) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length > 12) score++;

    // Una contraseña es "strong" si tiene score >= 3
    return score >= 3;
};

// Función para obtener la fortaleza de la contraseña
export const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length > 7) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length > 12) score++;

    if (!password) return { label: 'None', color: '#aaa', fill: 0, score: 0 };
    if (score <= 1) return { label: 'Weak', color: '#e74c3c', fill: 1, score };
    if (score === 2) return { label: 'Medium', color: '#f1c40f', fill: 2, score };
    if (score === 3 || score === 4) return { label: 'Strong', color: '#27ae60', fill: 3, score };
    if (score >= 5) return { label: 'Very Strong', color: '#145c2c', fill: 4, score };
};
