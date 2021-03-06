import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from "../redux/actions/users";
import Card from './CardComponents';

// eslint-disable-next-line
const Users = (callback, deps) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getUser = useCallback(()=> dispatch(getUsers([{
    //     id:1,
    //     name: "Leanne Graham",
    //     company: {
    //         name: "Romaguera-Crona",
    //         catchPhrase: "Multi-layered client-server neural-net",
    //     }
    // }])), [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        dispatch(getUsers());
    }, []);

    return (
        <>
            {users.loading && <p>Loading...</p>}
            {users.length >0 && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Users;