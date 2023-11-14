---
title: "This is frontmatter"
date: 2020-04-30 12:34
categories: [JavaScript, React]
---

A*cat*meow
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

__Underlined Text__

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

aaaaaaaa**bold**_emphasis_~~delete~~`inline code`

- list

  - list
    - list
  - list
  - list

- [ ] not checked
- [x] checked



1. ordered list
1. ordered list
1. ordered list
   1. aaa
   1. aaa
      1. eeeee
      1. eeeee
   1. aaa
1. ordered list

This is [link to GitHub.com](https://github.com/).

This is ![image](https://github.githubassets.com/images/modules/logos_page/Octocat.png).

> quote
> quote
> quote
> quote

> quote
>
> > quoted quote

| Left align | Right align | Center align |
| :--------- | ----------: | :----------: |
| This       |        This |     This     |
| column     |      column |    column    |
| will       |        will |     will     |
| be         |          be |      be      |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |



---

---

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```