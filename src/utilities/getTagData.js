const getTagData = (id) => {
  const tags = JSON.parse(localStorage.getItem("tags")) || [];

  const findTag = (tag) => {
    return (tag.id === id);        
  };

  const tag = tags.filter(findTag);

  return(tag[0] || []);
};

export default getTagData;