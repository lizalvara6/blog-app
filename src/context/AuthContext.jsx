import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider( { children }) {
    const [user, setUser] = useState(null);

    // Load user from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (username, password) => {
        const userData = { name: username };
        setUser(userData);
        // Persist to localStorage
        localStorage.setItem("user", JSON.stringify(userData));
    };
    
    const logout = () => {
        setUser(null);
        // Clear from localStorage
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}