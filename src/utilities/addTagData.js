const addTagData = (x, y, color, colorLabel, data) => {
  let tags = JSON.parse(localStorage.getItem("tags")) || [];
  tags.push({id: `${x}`.concat(`${y}`), x: x, y: y, color: color, colorLabel: colorLabel, ...data});
  localStorage.setItem("tags", JSON.stringify(tags));
};

export default addTagData;