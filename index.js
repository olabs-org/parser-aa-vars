module.exports = function (definition) {
  const vars = {};
  const arrResult = JSON.stringify(definition)
  .match(/trigger.data.([.a-zA-Z0-9_]+)/g)
  .map(v => v.split('.').splice(2));

  arrResult.forEach(v => {
    if (v.length === 1) {
      if (vars[v[0]] === undefined) vars[v[0]] = null;
    } else {
      let name = v.shift();
      if (vars[name] === undefined || vars[name] === null) vars[name] = {};
      let path = vars[name];

      v.forEach(el => {
        if (path[el] === undefined) path[el] = {};
        path = path[el];
      });
    }
  });

  const result = [];
  for (let key in vars) {
    vars[key] === null ? result.push(key) : result.push({ [key]: vars[key] });
  }
  return result;
}