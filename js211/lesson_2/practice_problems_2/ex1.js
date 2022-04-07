function say() {
  var a;
  
  // if (false) {
  //   a = 'hello from inside a block';
  // }

  console.log(a);
}

say();

/*
The code above will output `undefined`.

On line 11, the `say` function is invoked. Within the function's body, 
the declaration for the variable `a` is hoisted to the top of `says` inner scope
and implicitly assigned the value of `undefined`.
This occurs because variables declared with the `var` keyword are function scoped
and NOT block scoped.

The contents of the if statement's body are never executed (line 5) because the
statement's condition evaluates to false. As a result, the `a` variable is never
reassigned to the 'hello from inside a block`;

Execution continues to line 8 where the console.log function is invoked and passed
the value referenced by the `a` variable as an argument. `a` still points to `undefined` so this
is what's output.
*/

