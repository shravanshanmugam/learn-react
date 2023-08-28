import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = (id) => {
  return axios.get(`http://localhost:4000/users/${id}`);
};

const fetchChannel = (id) => {
  return axios.get(`http://localhost:4000/channels/${id}`);
};

function RQDependentQueriesPage({ email }) {
  console.log("render RQDependentQueriesPage");
  const { data: user } = useQuery(["users", email], () => fetchUser(email), {
    select: (data) => data?.data,
  });
  const channelId = user?.channelId;

  const { data: channel } = useQuery(
    ["channels", channelId],
    () => fetchChannel(channelId),
    {
      enabled: !!channelId, // double negation sets to false if channelId is not present
      select: (data) => data?.data,
    }
  );
  return (
    <div>
      <h2>User Details</h2>
      <p>Email: {user?.id}</p>
      <h2>Channels</h2>
      {channel &&
        channel.tags.map((tag) => (
          <h2 key={tag}>
            {tag}
            <br />
          </h2>
        ))}
    </div>
  );
}

export default RQDependentQueriesPage;
