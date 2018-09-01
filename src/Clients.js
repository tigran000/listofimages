import React from 'react'

import Client from './Client/Client'

const Users = ({ users }) => users.map((client, index) =>
    <Client
        key={client.name + index}
        name={client.name}
        avatar={client.avatar}
        rating={client.rating}
    />);

export default Users;