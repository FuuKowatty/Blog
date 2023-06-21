---
  title: 'Advanced Gridbox Usage: Unleashing the Full Potential of CSS Grid'
  image: 'https://i.imgur.com/54GsLmp.png'
  date: '2023-06-13'
---

&ensp;

## Introduction
CSS Grid is a powerful layout system that revolutionizes the way we design and structure web pages. With its ability to create complex grid-based layouts, CSS Grid has become a go-to tool for many front-end developers. In this article, we will explore advanced techniques for utilizing CSS Grid to its fullest potential. By diving deeper into Gridbox usage, you’ll be able to create stunning and dynamic layouts that push the boundaries of web design.

&ensp;

### Understanding Gridbox
Before we delve into advanced techniques, let’s briefly recap the basics of CSS Grid. Gridbox is a two-dimensional grid system that allows us to define rows and columns to create a flexible layout. It consists of a parent container (grid container) and its child elements (grid items). By specifying grid lines, we can position and align grid items precisely.
example of gridbox

&ensp;

### fr unit
Furthermore, it is worth remembering the fr unit (fractional unit). It occupies the remaining space of the parent element and allows you to divide your grid layout into equal portions.
For example:
```html
<div class=”grid-container”>
 <div class=”grid-item”>Item 1</div>
 <div class=”grid-item”>Item 2</div>
 <div class=”grid-item”>Item 3</div>
</div>
```
```css
.grid-container {
  display: grid;

/* Distributes space in a 1:2:1 ratio */
  grid-template-columns: 1fr 2fr 1fr; 
  grid-gap: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 10px;
}
```
![grid-columns](https://miro.medium.com/v2/resize:fit:640/format:webp/1*Qq0bBYgvHRsMQ8klV355sw.png)

&ensp;

In this example, the grid-template-columns property is set to 1fr 2fr 1fr, which means the available horizontal space will be divided into three equal parts. The first and third columns will take up one fractional unit each, while the second column will take up two fractional units. This creates a 1:2:1 ratio, with the middle column occupying twice as much space as the other columns. But what is free space wont be available?

&ensp;

```css
.grid-container {
 display: grid;
 grid-template-columns: 300px 300px 1fr;
 width: 610px; /* count first gap space */
 grid-gap: 10px;
}

.grid-item {
 background-color: lightblue;
 padding: 10px;
}
```
![grid-columns](https://miro.medium.com/v2/resize:fit:640/format:webp/1*RxkpbLukcCoQHpXLGvH14A.png)

&ensp;

When using the fr unit in CSS Grid, it will distribute the remaining space equally among the columns or rows. However, if there is not enough remaining space to accommodate the specified proportions defined by the fr unit, it will fall back to the minimum content size.

&ensp;

&ensp;

## Gridbox Techniques
Grid Template Areas: Grid Template Areas allow you to create complex layouts by defining named grid areas. This technique is particularly useful for creating magazine-style layouts or sectioned pages. By assigning specific grid areas to grid items, you can easily control their placement and visual hierarchy. For example:
```html
<div class=”grid-container”>
 <div class=”header”>header</div>
 <div class=”sidebar”>sidebar</div>
 <div class=”main”>main</div>
 <div class=”footer”>footer</div>
</div>
```
```css
.grid-container {
 display: grid;
 grid-template-areas:
 “header header header”
 “sidebar main main”
 “footer footer footer”;
}

.header {
 grid-area: header;
 background: red;
}

.sidebar {
 grid-area: sidebar;
 background: lightblue;
}

.main {
 grid-area: main;
 background: green;
}

.footer {
 grid-area: footer;
 background: gray;
}
```
![grid-columns](https://miro.medium.com/v2/resize:fit:640/format:webp/1*bqQH1dA9k4451BeCbQAIzQ.png)

&ensp;

### Grid Auto-Fit and Grid Auto-Fill
These powerful features allow the grid to automatically adjust the number of columns based on the available space. Grid Auto-Fit creates as many columns as possible within the container, while Grid Auto-Fill creates fixed-width columns and fills the available space. These techniques are perfect for responsive designs where the number of columns needs to adapt to different screen sizes. For example:

&ensp;

```html
<div class="grid-container">
 <div class="grid-item">Item 1</div>
 <div class="grid-item">Item 2</div>
 <div class="grid-item">Item 3</div>
</div>
<div class='line'/> 500px
```
```css
.grid-container {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 1rem;
}

.grid-item {
  background: lightblue
}
```
![grid-columns](https://miro.medium.com/v2/resize:fit:640/format:webp/1*0kFAkAOaKJEI_om0ajWwyg.png)

&ensp;

```css
.grid-container {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 gap: 1rem;
 margin-bottom: 100px;
}

.grid-item {
 background: lightblue
}

.line {
 height: 5px;
 background: pink;
 width: 500px;
}
```
![grid-columns](https://miro.medium.com/v2/resize:fit:720/format:webp/1*gcg-zKtaN9KoQgl7-7bWdg.png)

&ensp;

Like you see while your width is not specified auto-fill property will try to contain as many as possible items in single column while auto-fit will utilize all available space.

&ensp;

&ensp;

## Summary
The article explores advanced techniques for utilizing CSS Grid to its fullest potential, enabling front-end developers to create stunning and dynamic layouts that push the boundaries of web design. It begins with a brief recap of the basics of CSS Grid, focusing on Gridbox, a two-dimensional grid system consisting of a parent container (grid container) and its child elements (grid items). The fr unit (fractional unit) is introduced, which allows for the distribution of remaining space within the parent element.

The article then discusses advanced Gridbox techniques. Grid Template Areas are highlighted as a means of creating complex layouts by defining named grid areas, useful for magazine-style layouts or sectioned pages. Grid Auto-Fit and Grid Auto-Fill are explained as powerful features that automatically adjust the number of columns based on available space, making them ideal for responsive designs. Grid Auto-Fit creates as many columns as possible within the container, while Grid Auto-Fill creates fixed-width columns and fills the available space.

Several code examples are provided throughout the article to illustrate the concepts. These examples demonstrate how to use CSS Grid properties such as grid-template-columns, grid-gap, and grid-area to achieve the desired layouts. The article emphasizes the flexibility and adaptability of CSS Grid, showcasing its ability to create visually appealing and responsive designs.

In conclusion, by exploring advanced Gridbox usage, front-end developers can harness the full potential of CSS Grid and create impressive layouts that elevate the web design experience.