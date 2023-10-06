function Parent() {
  this.type = 'parent';
}

Parent.prototype.say = function () {
  console.log('parent say hello');
};

{
  /**
   * 原型链继承
   */
  //  有两个缺点：

  //  1. 由于子类通过其原型prototype对父类实例化，继承了父类。所以说父类中的共有属性要是引用类型，就会在子类中被所有的实例共用，因此一个子类的实例更改子类原型从父类构造函数中继承来的共有属性就会影响到其他子类
  //  2. 由于子类实现的继承是靠其原型prototype对父类实例化实现的，因此在创建父类的时候，是无法向父类传递参数的，因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化。

  function SuperClass() {
    this.superValue = true;
  }
  SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
  };

  function SubClass() {
    this.subValue = false;
  }

  // 继承父类
  SubClass.prototype = new SuperClass();
  // 为子类添加公有方法
  SubClass.prototype.getSubValue = function () {
    return this.subValue;
  };
}

{
  /**
   * 构造函数继承
   *
   */
  //  SuperClass.call(this, id) 这条语句是构造函数式继承的精华，由于call这个方法可以更改函数的作用环境，因此在子类中，对SuperClass调用这个方法就是将子类中的变量在父类中执行一遍，由于父类中是给this绑定属性的，因此子类自然也就继承了父类的共有属性。
  //  由于这种类型的继承没有涉及原型prototype，所以父类的原型方法自然不会被子类继承，而如果想要被子类继承就必须要放在构造函数中，这样创建出来的每个实例都会单独拥有一份而不能共用，这样就违背了代码复用的原则。
  function SuperClass(id) {
    // 引用类型共有属性
    this.books = ['JavaScript', 'html', 'css'];
    // 值类型共有属性
    this.id = id;
  }

  SuperClass.prototype.showBooks = function () {
    console.log('父类的方法', this.books);
  };

  function SubClass(id) {
    SuperClass.call(this, id);
  }
}

{
  // 组合继承
  function SuperClass(name) {
    // 值类型共有属性
    this.name = name;
    // 引用类型共有属性
    this.books = ['JavaScript', 'html', 'css'];
  }

  SuperClass.prototype.showBooks = function () {
    console.log('父类的方法', this.books);
  };

  function SubClass(name, time) {
    // 构造函数中继承父类name属性
    SuperClass.call(this, name);
    // 在子类中新增共有属性
    this.time = time;
  }
  // 类式继承 子类原型继承父类
  SubClass.prototype = new SuperClass();
  // 子类原型方法
  SubClass.prototype.getTime = function () {
    console.log(this.time);
  };
}

{
  // 原型式继承
  function inheritObject(o) {
    // 声明一个过度函数对象
    function F() {}
    // 过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
  }
}

{
  // 寄生组合式继承
  function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  /**
   * 寄生式继承 继承原型
   * 传递参数 subClass 子类
   * 传递参数 supClass 父类
   */
  function inheritPrototype(subClass, superClass) {
    // 复制一份父类的原型副本保存在变量中

    // var p = inheritObject(superClass.prototype);
    // 这两种写法应该都可以
    var p = Object.create(superClass.prototype);
    // 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类的原型
    subClass.prototype = p;
  }

  function SuperClass(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }
  SuperClass.prototype.getName = function () {
    return this.name;
  };
  // 定义子类
  function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
  }

  // 寄生式继承父类原型
  inheritPrototype(SubClass, SuperClass);
  // 子类新增原型方法
  SubClass.prototype.getTime = function () {
    return this.time;
  };

  // 最终的这个东西
  // console.log('最终的这个');
  console.log(new SubClass());
}
