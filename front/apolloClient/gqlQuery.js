import { gql } from "@apollo/client";
export const getUsers = gql`
  query {
    users {
      name
      createdAt
    }
  }
`;
export const getUser = gql`
  query user($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      createdAt
    }
  }
`;
export const getTask = gql`
  query {
    users {
      id
      name
      tasks {
        name
      }
    }
  }
`;


export const ADD_TODO = gql`
  mutation addTask($task: [AddTaskInput!]!) {
    addTask(input: $task) {
      task {
        id
        title
      }
    }
  }
`;

/* 
  mutation CreateTodo(
    createTodo(data: {
      name: "...",
      content: "...",
      date: ...,
    }) {
      name,
      content,
      date
    }
  )
*/

export const GET_TODOS = gql`
  query {
    queryTask {
      id
      title
      completed
    }
  }
`;


// export const getUserTask = gql`
// query post($id: ID!) {
//   user(where: { id: $id }) {
//     id
//     title
//     content
//   }
// }`

// export const createCart = gql`
//   mutation createCart($data: [CartCreateInput!]!){
//     createCarts(data: $data) {
//       id
//       sum
//       quantity
//       createdAt
//     }
//   }
// `;

// export const getCarts = gql`
// query {
//   carts {
//     product {
//       id
//       name
//       slug
//       price
//       description
//       quantityInStock
//       createdAt
//     }
//     id
//     sum
//     quantity
//     createdAt
//   }
// }
// `
// export const deleteCart = gql`
//   mutation deleteCart($data: [CartWhereUniqueInput!]!){
//     deleteCarts(where: $data) {
//       id
//       sum
//       quantity
//       createdAt
//     }
//   }
// `;
