import React, { useState, Fragment } from "react";

import AddUser from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{
					name: uName,
					age: uAge,
					id: Math.floor(Math.random() * (999 - 100 + 1 + 100).toString()),
				},
			];
		});
	};

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
}

export default App;
