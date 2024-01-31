import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export function useUser(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return user;
}