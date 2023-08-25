// promise waits for a 200 from database
import React from "react";
import React, { useEffect } from "react";

localStorage.setItem("UserName", "");
const { user } = useAuth0();
const { email } = user;

// console.log(email);

useEffect(() => {(async function () {
        const urlString = "https://mwl-backend-v2.herokuapp.com/users/" + email;
        await fetch(urlString, {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem("UserName", response[0].userName);
            } else {
                document.location.replace("https://mwl-backend-v2.herokuapp.com/registration");
            }
        });
    });
}, [email]);

export default function AddToFavorites() {
    return (
        <div>
            
        </div>
    )
}
