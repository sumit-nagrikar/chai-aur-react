import React from 'react'

//context created from react and exported
const UserContext = React.createContext()

export default UserContext;

/*Summary
Create Context: const UserContext = React.createContext();
Provide Context: Use UserContext.Provider to make the context value available to the component tree.
Consume Context: Use useContext(UserContext) in any component that needs access to the context.
By following these steps, you can effectively manage and share state across your React application without prop drilling.*/
