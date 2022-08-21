import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
    location
    community
  }
}
`;

export const QUERY_COMMUNITY= gql`
query Community {
  community {
    _id
    name
    location
    users {
      name
    }
  }
}
`;

export const QUERY_COMMUNITIES= gql`
query Communities {
  communities {
    _id
    name
    location
  }
}
`;