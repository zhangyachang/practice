const io = require('../app').io;
const utils = require('../utils');
const onLineUser = {};

// 当前在线人数
const UserInfo = {
  num: 0,
};

/*
  用户在线列表
  onLineUser = {
    id: {uid: uid, socket: socket}
  }
  每条消息都带上 uid 吧
  尝试一下 用户不登录
*/

const handleCheckOnLineUser = () => {
  let users = [];
  Object.keys(onLineUser).map((uid) => {
    const item = onLineUser[uid];
    users.push({
      id: item.uid,
      name: item.name,
    });
  });
  return users;
};

const getAdminSocket = () => {
  // 客户,可能会登录多个浏览器窗口，存储多个
  let admins = [];
  Object.keys(onLineUser).map((uid) => {
    const item = onLineUser[uid];
    if (item.name === '塞恩') {
      admins.push(item.socket);
    }
  });
  return admins;
};

io.on('connection', (socket) => {
  console.log(`${++UserInfo.num}个人已经连接聊天室`);
  // console.log(`socket对象`, socket);

  // 将用户保存到内存中
  socket.on('userId', (uid, name) => {
    console.log(`后台收到的uid  ${uid}`);
    // console.log(`查看socket.id`);
    console.log(socket.client.id);

    // 保存用户信息
    onLineUser[socket.client.id] = {
      uid: uid,
      name: name,
      socket: socket,
    };

    socket.emit('aa', '测试消息');

    // 用户列表更新
    let users = handleCheckOnLineUser();
    io.emit('userChange', users);
  });

  // 私聊
  socket.on('dd', (msg) => {
    console.log('----接收到私聊消息-----');
    console.log(msg);
    socket.emit('dd', msg);
  });

  // 群聊，聊天的内容
  /**
   * 规定一下格式
   * {id: "客户端的id", name: "发送者的名字", content: "内容", time: "服务端这边加上去"}
   */
  socket.on('allChat', (msg) => {
    console.log(`-----接收到群聊消息-----`);
    // 广播群聊消息，发送给所有人，除了自己
    // To all connected clients except the sender
    msg.time = utils.getTime();
    msg.msgId = Date.now();
    // socket.broadcast.emit('allChat', msg);

    // 发送给所有的吧
    io.emit('allChat', msg);
  });

  // 下发数据
  socket.on('putDpData', (msg) => {
    console.log('下发dp点');
    msg.time = utils.getTime();
    msg.msgId = Date.now();
    msg.type = 'putDpData';
    socket.broadcast.emit('putDpData', msg);
    socket.emit('selfPutDpData', msg);
    // io.emit('putDpData', msg);
  });

  // 上报数据
  socket.on('dpDataChange', (msg) => {
    console.log('上报数据', msg);
    // 上报的服务时间
    msg.time = utils.getTime();
    msg.msgId = Date.now();
    msg.type = 'dpDataChange';
    // 理论上应该发送给其他人，但是，感觉这里全部发送处理起来比较简单一些，客户端不需要做单独处理。
    // socket.broadcast.emit('dpDataChange', msg);
    // io.emit('dpDataChange', msg);
    // 这个上报，上报给发送者自己，以及发送给 “塞恩，演示者”
    const admins = getAdminSocket();
    console.log('admins: ', admins);

    if (admins.length > 0) {
      console.log('给塞恩发送了');
      admins.forEach((adminSocket) => {
        adminSocket.emit('dpDataChange', msg);
      });
    }
    // 给发送者发送消息，如果发送者是自己呢？
    // // 如果发送者是演示者，排除自己就不需要给自己发了
    for (let i = 0; i < admins.length; i++) {
      if (admins[i] === socket) {
        return;
      }
    }

    socket.emit('dpDataChange', msg);
  });

  socket.on('disconnect', () => {
    Reflect.deleteProperty(onLineUser, socket.client.id);
    console.log(`一个用户已经离开了, ${--UserInfo.num}`);

    // 用户列表更新
    let users = handleCheckOnLineUser();
    io.emit('userChange', users);
  });
});
