const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store', 'README.md']

function generateDir(rpath, splitSymbol, menuType, sortType) {
  const filenames = [];
  // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
  let fileTypes = /\.md$/; //只匹配以md结尾的文件
  fs.readdirSync(rpath).forEach(file => {
    if (excludes.indexOf(file) < 0) {
      fullpath = rpath + "/" + file
      
      var fileinfo = fs.statSync(fullpath)
      if (fileinfo.isFile()) {
        // if(file.indexOf('.md') > 0) {
        if (fileTypes.test(file) > 0) {
          if (file === 'index.md') {
            file = '';
          } else {
            file = file.replace('.md', '');
          }

          if (menuType === 'nav') {
            const originName = file;
            let nameArr = file.split(splitSymbol);
            nameArr.shift();
            file = nameArr.join(' ');

            const dirArr = rpath.split('\\')
            file = {
              text: file,
              link: `/${dirArr[dirArr.length - 1]}/${originName}`
            }
          } else if (menuType === 'sidebar') {
            
          }

          if (sortType === 'unshift') {
            // 按时间倒序
            filenames.unshift(file);
          } else {
            // 按文件顺序
            filenames.push(file);
          }
        }
      }
    }
  })
  // console.log(filenames)
  // filenames.sort((a, b) => b - a); // 排序
  return filenames;
}

module.exports = generateDir;