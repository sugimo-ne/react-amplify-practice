/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOnedayTodo = /* GraphQL */ `
  query GetOnedayTodo($id: ID!) {
    getOnedayTodo(id: $id) {
      id
      priority
      name
      is_conplete
      description
      type
      date
      kindOf
      is_deleted
    }
  }
`;
export const listOnedayTodos = /* GraphQL */ `
  query ListOnedayTodos(
    $filter: ModelOnedayTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnedayTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        priority
        name
        is_conplete
        description
        type
        date
        kindOf
        is_deleted
      }
      nextToken
    }
  }
`;
export const listOnedayTodosSortedByPriority = /* GraphQL */ `
  query ListOnedayTodosSortedByPriority(
    $type: String
    $priority: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOnedayTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ListOnedayTodosSortedByPriority(
      type: $type
      priority: $priority
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        priority
        name
        is_conplete
        description
        type
        date
        kindOf
        is_deleted
      }
      nextToken
    }
  }
`;
export const listOnedayTodosSortedByDate = /* GraphQL */ `
  query ListOnedayTodosSortedByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOnedayTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ListOnedayTodosSortedByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        priority
        name
        is_conplete
        description
        type
        date
        kindOf
        is_deleted
      }
      nextToken
    }
  }
`;
