
module.exports = function loader(source) {
  const options = this.getOptions()

  options.plugins.forEach((plugin) => {
    source += `var ${plugin} = require('dayjs/plugin/${plugin}');`
  })

  options.plugins.forEach((plugin) => {
    source += `dayjs.extend(${plugin});`
  })
  
  // special plugin
  source += `var antdPlugin = require('antd-dayjs-webpack-plugin/src/antd-plugin');dayjs.extend(antdPlugin);`
  
  return source
}
