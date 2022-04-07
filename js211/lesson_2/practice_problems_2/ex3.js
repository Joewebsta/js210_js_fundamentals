function hello() {
  var a;
  a = 'hello';
  console.log(a);
  
  if (false) {
    a = 'hello again';
  }
}

hello(); // hello
console.log(a); // reference error

/*
After hoisting, the code above is equivalent to:

On line 11, the hello function is invoked.
Within the function's body, the declaration for the `a` variable is hoisted
to the top of the `hello` function's inner scope and implicitly assigned the 
value of `undefined`.
This occurs because variables declared with the `var` keyword are function scoped
and not block scoped.

On line 3, the variable `a` is reassigned to the string `'hello'`.
The value referenced by `a` is then passed to the console.log invocation which
logs `'hello'`.

The contents of the `if` statement on line 7 are never executed because the 
statement's condition evaluates to false.

Once `hello` returns, a variable `a` is passed as an argument to the console.log
invocation on line 12. This will result in a reference error because
an `a` variable is not in scope.

Variable declared within the inner scope of a function are inaccessible to the 
surrounding outer scope.


*/