import React from "react";
import UserNav from "./users-nav/UserNav";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./CreatePost";
import UserPost from "./my-posts/UserPost";
import MyProfile from "./MyProfile";
import Default from "../../pages/Default";

function User() {
  return (
    <div>
      <UserNav />
      <Switch>
        <Route path="/all-posts">
          <Default />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/my-posts">
          <UserPost />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default User;
