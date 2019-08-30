import Mock from 'mockjs';
import tImg from '../../assets/user.jpg'

const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: tImg,
    name: 'sxlisme'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.name(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
//登陆人,返回数据
console.log(LoginUsers, Users);
export { LoginUsers, Users };
