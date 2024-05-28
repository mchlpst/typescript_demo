# Exercise 4

### Location

`components > Exercise4.vue`

### Introduction

In this component there is a `v-for` that sets a quote with a name. The object looks like this.

```json
{
  "quotes": [
    {
      "quote": "Coding like poetry should be short and concise.",
      "firstName": "Santosh",
      "lastName": "Kalwar"
    }
  ]
}
```

### Assessment

Your assessment is to create an `Interface` that fits the `data`, but also to create a `computed()` that combines `fristName` and `lastName` to `fullName`. Don't forget to create a `Type` this computed.

A bonus would be to get an error if you swap `firstName` and `lastName`.
