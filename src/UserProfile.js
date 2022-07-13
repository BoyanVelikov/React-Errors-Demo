import * as React from 'react';

const UserProfile = (props) => {
    return (
        <section>
            <h1>User Profile Section</h1>
            <article>
                <article>Username: {props.username}</article>
                <article>Name: {props.name}</article>
                <article>Age: {props.age}</article>
                <article>City: {props.city}</article>
            </article>
        </section>
    )
}

export default UserProfile;