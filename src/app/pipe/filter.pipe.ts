import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
// 管道需要三个参数，当前的课程列表，list,第二个参数是过滤的字段，第三个参数，用户输入的关键字
  transform(list: any[], filterField: string, keyword: string): any {
  // 若这两个参数任一没有传，直接返回当前列表不做任何过滤
  if(!filterField || !keyword){  
    return list;
}
  return list.filter( item => {
    // 养成习惯指定类型
    let fiedlValue:string = item[filterField];
    return fiedlValue.indexOf(keyword) >=0;
    // 若大于等于0 返回0true  就留下
  })
  }

}
// indexOf语法
// stringObject.indexOf(searchvalue,fromindex)
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
// 注释：indexOf() 方法对大小写敏感！
// 注释：如果要检索的字符串值没有出现，则该方法返回 -1。