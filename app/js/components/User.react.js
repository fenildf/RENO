/**
 * The MIT License (MIT)
 * Copyright (c) 2016, Jeff Jenkins.
*/

const React = require('react');
const Link = require('react-router').Link

const User = React.createClass({
  render :function() {
    return (
      <section className="container">
        <div className="page-header">
          <h1>title</h1>
        </div>
        <h2>User</h2>
        <Link to="/">Home</Link>
      </ section >
    )
  }
})

module.exports = User;
