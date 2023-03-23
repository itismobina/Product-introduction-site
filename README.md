How to create this project?
1.Install React in you're folder
    1.first of all, you should install Node.js in you're computer!
    2.and write this line in Terminal => "npm install -g npm"
    3.and you should create a folder with every name you would like like
    my app with this line => "npx create-react-app my-app"
    4.and go to you're folder with this text => "cd my-app"
    5.and start you're first project with React with write
    this line => npm start (in you're folder of project like "my app folder")

2.you need just three file in you're src folder like => 
    -index.html
    -index.css
    -App.js

3.use css or tailwindCss in youre project
    1.I used TailwindCss in my project , so for install tailwind you should write this
    line in folder of you're project => npm install tailwindcss postcss autoprefixer
    2.and then write this line => npx tailwindcss init -p
    3.and edit tailwind.config.js and paste this ;
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    4.and open index.css and paste this text ; 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    5.and use tailwind in you're project. you should just classes of tailwind!

4.We need components because that's what React is.
    1.so we have seven component. 
        1.Banner.js
        2.Card.js
        3.Cards.js
        4.Footer.js
        5.Logos.js
        6.Navbar.js
        7.Search.js

5.and we should add every components in App.js
-if you have any question , you can send me text for getting answer!
