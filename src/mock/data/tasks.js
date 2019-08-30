import Mock from 'mockjs';

//模拟数据
const taskList = [];

for (let i = 0; i < 37; i++) {
  taskList.push(Mock.mock({
    userName:Mock.mock('@last()'),
    cookie:Mock.mock('@guid'),
    'type|1': ["mx","MB"],
    'times|1': [10,20,30,50,100,120],
    commitTime: Mock.mock('@datetime'),
    endTime: Mock.mock('@datetime'),
    status:'doing',
    score:Mock.mock('@integer(-6000, 1000000)'),
    operat: '复制',
    'prize|1':['---','嘀嘀打车100元抵用券','双立人刀具3件套','恒源祥3件套','洁丽雅印象6 方巾2 毛巾2 浴巾1 五件套','象印不锈钢保温杯'],
  }));
}
//登陆人,返回数据
console.log(taskList);
export { taskList };
