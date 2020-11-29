# Assertion Library

Different reviews have been taken in consideration, like [[1]](https://github.com/Prismatik/dendritic/issues/48) and [[2]](https://github.com/moll/js-must). The libraries differences are very subtle.

Finally, the assertion library chosen is called `Chai`. Since uses a familiar syntax, almost as the default JavaScript's `Assert` library. Besides, allows for a Behavior Driven Development (BDD) perspective.

The possibility to use both of these styles may prove useful. Especially when developing higher level tests. While also keeping a lower level approach most of the time. [[3]](https://blog.testlodge.com/tdd-vs-bdd/)

## Test comparison

### Chai

The chai syntax may become a bit difficult to write (with Except function). Yet, it allows BDD as well as TDD. This provides different levels of granularity.

```{typescript}
expect(smth).to.be.a('string');
expect(smth).to.eql({bla: "blah"});
```

### Assert

Assert is also a very good choice. It is included in Node and used since 1999. But, since I want to use BDD too, it becomes less useful.

```{typescript}
assert.equal(typeof smth, 'string');
assert.deeplyEqual(smth, {bla: "blah"});
```

### Must

Must is also a readable library, yet no so popular. It only uses BDD.

```{typescript}
smth.must.be.string()
smth.must.eql({bla: "blah"})
```

## References

[1] Prismatik. (2016). Assert vs Must vs Chai. Retrieved from https://github.com/Prismatik/dendritic/issues/48

[2] @moll. (2020). Must.js. Retrieved from https://github.com/moll/js-must

[3] Nair, J. (2018). TDD vs BDD – What’s the Difference Between TDD and BDD? Retrieved from https://blog.testlodge.com/tdd-vs-bdd/
