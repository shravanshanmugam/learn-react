import React from "react";
import { UserContext, LocationContext, JobContext } from "../App";

export default function ContextHook() {
  const job = React.useContext(JobContext);
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <LocationContext.Consumer>
            {(location) => {
              return (
                <div className="user-container">
                  <p>
                    My name is {user}. I am from {location}. I work as a {job}
                  </p>
                </div>
              );
            }}
          </LocationContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}
