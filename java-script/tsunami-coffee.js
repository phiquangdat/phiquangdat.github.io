html,
body {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  margin: 0;
  background-color: white;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.main {
  height: 30rem;
  padding-top: 1rem;
  background-image: url("https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/bg-photo.png");
  background-size: cover;
}

.main img {
  width: 15rem;
  display: block;
  margin: auto;
  margin-top: 5rem;
}

nav {
  background-color: OrangeRed;
  color: White;
  padding: 0.75rem 1.25rem;
}

ul {
  list-style: none;
  margin: 0;
}

li {
  display: inline-block;
}

.supporting,
.rating,
.gallery,
.location {
  margin: 4em auto;
}

.supporting {
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
}

.supporting img {
  width: 10%;
  height: 10%;
  margin-right: 5%;
}

.rating {
  background-color: OrangeRed;
  height: 20rem;
  padding: 0 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rating h1 {
  font-size: 2.5rem;
}

.gallery img {
  display: block;
  width: 30%;
  margin: 1.5%;
  float: left;
}

.clearfix {
  clear: both;
}

.location {
  text-align: center;
  margin-bottom: 7rem;
}

.location img {
  width: 100%;
}

footer {
  background-color: OrangeRed;
  padding: 0 1rem;
}

footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5em 0;
  color: white;
}

@media only screen and (max-width: 960px){
  .main{
    padding-top: 0;
  }
}

@media only screen and (max-width: 700px){
  .supporting img {
    display:none;
  }
}

@media only screen and (max-width: 470px){
  rating h1 {
    font-size: 2rem;
  }

  footer nav {
    display: none;
  }
}
