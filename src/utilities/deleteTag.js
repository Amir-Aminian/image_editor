const deleteTag = (id) => {
  let tags = JSON.parse(localStorage.getItem("tags")) || [];

  const findTag = (tag) => {
    return (tag.id !== id);        
};

tags = tags.filter(findTag);

localStorage.setItem("tags", JSON.stringify(tags));
};

export default deleteTag;