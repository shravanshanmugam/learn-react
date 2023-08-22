import React from "react";
import { UserContext, LocationContext } from "../App";

export default function ContextHook() {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <LocationContext.Consumer>
            {(location) => {
              return (
                <div className="user-container">
                  <p>
                    My name is {user}. I am from {location}
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
