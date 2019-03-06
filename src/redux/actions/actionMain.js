export const addPost = data => ({
  type: "ADD_POST",
  data
});

export const editPost = id => ({ type: "EDIT_POST", id: id });

export const deletePost = id => ({
  type: "DELETE_POST",
  id: id
});

export const updatePost = (id, data) => ({
  type: "UPDATE",
  id: id,
  data: data
});
