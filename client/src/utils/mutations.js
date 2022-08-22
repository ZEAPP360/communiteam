import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`
// make a link to resolvers
export const UPDATE_USER = gql`
mutation UpdateUser($community: String!, $location: String!) {
  updateUser(community: $community, location: $location) {
    token
    user {
      _id
      community
      location
    }
  }
}`