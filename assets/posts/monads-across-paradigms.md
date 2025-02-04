Monads are a famously difficult concept in functional programming, though once they 'click', creating and using them can be rather trivial. Probably the most famous monad is the *nullable* type, also known as the `Maybe` monad in Haskell or the `Option` type in Rust, where a value can be represented as 'something' or 'nothing'.

```hs
-- The Maybe monadic type declaration in Haskell
data Maybe a = None | Just a
```

Monads play a very important role in functional programming languages, often described generally as:
> a way to structure computations as a sequence of steps, where each step not only produces a value but also some extra information about the computation, such as a potential failure, non-determinism, or side effect.

-- (from [Wikipedia](https://en.wikipedia.org/wiki/Monad_(functional_programming)))

In terms of non-functional languages, we *already* have systems to deal with potential failures (exceptions), non-determinism, and side effects, while also having a clear sequence of computational steps - being the definition of [*imperative languages*](https://en.wikipedia.org/wiki/Imperative_programming).

## The Exception monad

In this section, we'll look at an imperative language that does have exceptions (C#) and an imperative language that does not have exceptions (Rust) and compare the control flow between them to see if we can factor out anything in common.

Rust does not have exceptions. It is one of the most loved features of the language and a personal favourite of mine. Instead, it relies on the `Result<T, E>` type whose variants are either a success result or a failure result, i.e. `Ok` and `Err`.

For example, we will look at a classic divide-by-zero problem and model is using results.

*For brevity, we'll assume we're using `anyhow::Result` to avoid explicitly typing out the error type*

```rust
fn safe_div(p: f32, q: f32) -> Result<f32> {
    match (p, q) {
        (_, 0) => Err(Error::msg("Attempted to divide by zero.")),
        _ => Ok(p / q)
    }
}
```

Then, in a `main` function, we'll attempt several divisions to try and get an answer.

```rust
fn main() -> Result<f32> {
    let p: f32 = 10;
    let q: f32 = 2;

    let res = safe_div(p, q);

    // we have to check here that the result succeeded before continuing.
    if res.is_err() {
        return res;
    }
    let ans = res.unwrap();     // can safely unwrap here

    let res = safe_div(p, ans);
    if res.is_err() {
        return res;
    }
    let ans = res.unwrap();
    // ...

    // if at this point, no failures have occurred.
    println!("The answer is: {}", ans);
    Ok (ans)
}
```

As you can see, it can quickly get verbose constantly checking if a result succeeded or failed. This is why the `?` operator was created.

### The ? operator

I'll call this operator the 'short-circuit operator', as it will cause a function to return early if it encounters a failure result, or it will unwrap if the expression was successful. We can rewrite the above main function to be much simpler as a result:

```rust
fn main() -> Result<f32> {
    let p: f32 = 10;
    let q: f32 = 2;

    // if the expression failed, the failure is returned.
    let ans = safe_div(p, q)?;
    let ans = safe_div(p, ans)?;
    // ...

    // if at this point, no failures have occurred.
    println!("The answer is: {}", ans);
    Ok (ans)
}
```

As you can see, the short-circuit operator reduces a lot of boilerplate across our programs.