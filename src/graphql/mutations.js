/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOnedayTodo = /* GraphQL */ `
  mutation CreateOnedayTodo(
    $input: CreateOnedayTodoInput!
    $condition: ModelOnedayTodoConditionInput
  ) {
    createOnedayTodo(input: $input, condition: $condition) {
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
export const updateOnedayTodo = /* GraphQL */ `
  mutation UpdateOnedayTodo(
    $input: UpdateOnedayTodoInput!
    $condition: ModelOnedayTodoConditionInput
  ) {
    updateOnedayTodo(input: $input, condition: $condition) {
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
export const deleteOnedayTodo = /* GraphQL */ `
  mutation DeleteOnedayTodo(
    $input: DeleteOnedayTodoInput!
    $condition: ModelOnedayTodoConditionInput
  ) {
    deleteOnedayTodo(input: $input, condition: $condition) {
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
