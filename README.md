# Complexityland

This repository captures the human knowledge of the topic "Complexity Theory" in a shorthand way.

This repository is not a course in complexity theory and its content will assume full knowledge of first and second degrees in computer science.  
In essence, this repository is for people with math or computer science background.

If you know a significant Computation Module, Class or Language, you should and can contribute to this project! For more information please read the [Contrebution rules](#Contrebution%20rules).

# Project structure

## Tree hierarchy (not to be confused with the polynomial hierarchy)

The project has a clear file hierarchy you can use for navigation,

- Computation Module (folder)
  - Classes (folder)
    - Language (file)

**The Computation Module** - this will always be a folder with the high-level name of the module, inside the folder there should be a file for every major branch of a sub-module, and every non-major module will be paired with a close major module in the same file.  
**The Classes** - the same rules of the computation module follow here, with the exception that if many classes are not major they will be stacked in a folder "Classes" with no other explanation, please note that on special cases there might be a few Classes nested or with a different name because of a deep connection.  
**The Language** - a language file should capture an important language in that particular module, i.e., SAT for NP.

For Example, the following hierarchy is valid,

- Turing Machine (folder)
  - P (folder)
    - STCON (file)
  - NP (folder)
    - SAT (file)
  - Classes (folder)
    - E (file)
    - #P (file)

## File convention

Inside the files you will find the actual information, We strongly recommend you stick to those rules,

1. We aim to make all files written as [Markdown](https://en.wikipedia.org/wiki/Markdown) files.
2. All files should start with the next line for the HTML version to be correct,
```html
<!-- title: Title Of The File -->
```
3. All mentions of another module/class/language should include a link to that file or the Wikipedia page.

The **Typing Convention** is as follows, all files should have a heading (h1) with the name of the subject, after that it should include the following sub-headings (h2),

1. _Definition_: A formal definition of the subject.
2. _Claims_: Important theorems about the subject.
3. _Relations_: Should be only for classes and such, the relation between other classes to this one.

If you don't know what to write in one of the sub-headings please leave it with ellipsis (...) so the next reader will know it needs completion and might even contribute on top of you!

# Contrebution rules

If you would like to contribute, you may of course suggest changes and additions to the codebase with the "pull" feature of GitHub.

Please read the [Project structure](#Project%20structure) beforehand to make the changes as smooth as possible.
