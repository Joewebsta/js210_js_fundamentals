function say() {
  // if (false) {
  //   let a = 'hello from inside a block';
  // }

  console.log(a);
}

say();

/*
This code will raise an exception.

On line 9, the `say` function is invoked. Within the function's body, the
if statement evaluates to false so the content's of its body are never executed.

The program's execution continues to line 6 where the console.log function is 
invoked and is passed the variable `a`.

An `a` variable was not declared and is not in scope so Javascript will raise 
a reference error because it cannot find a value referenced by `a`.
*/