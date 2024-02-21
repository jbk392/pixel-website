import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './Home.css';
import Button from '@mui/material/Button';

function Home() {
    const [user, loading] = useAuthState( auth );
    const [ name, setName ] = useState( "" );

    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName(); 
    }, [ user, loading ]);


    return (
        <div className="home">
        <div className="dashboard__container">
                <h3>Welcome, { name }</h3>
                <div id=''> Your email: {user?.email}</div>
                
                <Button className="dashboard__btn" onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    );
}
export default Home;