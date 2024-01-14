<h2>Motivation</h2>
<p>Using ssr \ ssg on next.js you get an html but with react and react-dom packages. This is reasonable but js cause render blocking and reduce performance</p>


<p>In <a href='www.nathankrasney.com'>www.nathankrasney.com</a> i have posts which are static but i have top and header component. How to create an html from component ? doing this i can use next.js like in <a href='https://github.com/NathanKr/next.js-serve-static-html-page-playground'>next.js-serve-static-html-page-playground</a> and serve html that i create my self without react and react-dom</p>

<h2>Relevant React API</h2>
<ul>
<li><a href='https://react.dev/reference/react-dom/server/renderToString'>renderToString</a></li>

<li><a href='https://react.dev/reference/react-dom/server/renderToStaticMarkup'>renderToStaticMarkup</a></li>
</ul>

<h2>Usage</h2>
I have vite react app and i can check the api there but in general this API is invoked on the server. To simulate this i will use vitest 

<h2>Open issues</h2>
<ul>
<li>in test i use .tsx otherwise i get error with component --> what to do on the server ?</li>
<li>according to the test they are the same - what is the difference between renderToStaticMarkup and renderToString</li>
</ul>