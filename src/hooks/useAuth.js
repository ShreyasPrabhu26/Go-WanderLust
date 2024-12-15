import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/firebase";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup the listener on unmount
        return () => unsubscribe();
    }, []);

    return { user, loading };
};
