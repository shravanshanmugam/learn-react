import React from "react";
import { UserContext, LocationContext, JobContext } from "../App";

export default function ContextHook() {
  // useContext hook instead of surrounding with Context.Consumer
  // requires Context object and return current state
  const job = React.useContext(JobContext);
  return (
    <div className="user-container">
      <p>Context hook</p>
      <UserContext.Consumer>
        {/* Surround component which requires state data with Context.Consumer */}
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
    </div>
  );
}
