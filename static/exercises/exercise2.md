# Exercise 2

### Location

`components > Exercise2.vue`

### Introduction

In this new file we recieve props from the parent component. There are two types used in this component.

```ts
type = Button;
type = TextComponent;
```

### Assessment

Transform the `defineProps` to Typescript. If you look at the data. Try to create these Types.

```json
{
  "title": "Oefening 2",
  "text": "<p>De oefen text die ervoor zorgt dat het allemaal werkt.</p>",
  "button": {
    "link": "https://nos.nl",
    "label": "Het nieuws",
    "target": "_blank"
  }
}
```
