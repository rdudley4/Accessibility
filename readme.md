Accessibility Website
===
![alt text](https://cdn.rawgit.com/aleen42/badges/master/src/webpack.svg "Built with Webpack 2.0")

The premise of this project is to create a website that puts accessibility as the top priority. It can be all too easy to forget things like contrast, alt attributes and simple tests that can help us as developers ensure the highest level of accessibility. People with varying levels of color-blindness, deafness, mobility issues and many others access the web every day; It is our job as web developers to keep this in mind when designing and developing our websites.

These are some of the things that were taken into account with this website
+ ### Contrast
    + In compliance with the [WCAG 2.0](https://www.w3.org/TR/WCAG20/) this website adheres to **WCAG AAA** contrast standards for both large and small text across the entire website as defined here:
        + 1.4.6 Contrast (Enhanced): The visual presentation of text and images of text has a contrast ratio of at least 7:1, *except for the following: (Level AAA)*
        + Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1
        + Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
        + Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.
    + All pages were tested in grayscale / desaturated to make sure even users with the most severe cases of color-blindness can interact with the website with no issues.

+ ### Structure
    + Utilizes [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes to give users with disabilities access to things like navigation landmarks, form hints and error messages, and more.
    + All icons (non-content) are SVG based vector graphics, ensuring that no matter what DPI or resolution the screen it will display crystal clear.

+ ### Optimization
    + Using the new Font Awesome 5  SVG-based Framework via Node.js
        + Utilizing Tree-Shaking via Webpack to remove additional loading & defining mechanisms and only import icons that are used by the site.
    + All images (aside from Font Awesome Icons) are automatically optimized when compiled for production via Webpack's image-loader to reduce file sizes quite drastically across the entire site. The following encoders/compressors were used: `JPEG -> mozjpeg` `PNG -> pngquant` `SVG -> svgo`
    + All javascript is transpiled with babel to ensure widest browser compatibility, and compressed to reduce file size.
        + Babel-polyfill is also used to emulate a full ES2015+ environment across a wide range of browsers.
    + All SCSS/CSS & HTML is also compressed for production.