<!DOCTYPE html>
<html lang="uk">
<head>
  <title>pageTitle</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="content-type" content="text/html;charset=UTF-8">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <script type="text/javascript" src="assets/js/vue.js"></script>

  <script type="text/javascript">
    window.App = {
      Settings: {
        root: '/'
      }
    };
  </script>
</head>
<body>
<div class="container">
  <div class="row div col-md-12">
    <div id="app">
      <h2>Hello, {{name}}</h2>
      <a class="btn btn-primary" :href="url">GotoGoogle</a>
      <a href="#" class="btn btn-default" @click="changeName">Change</a>
      <section>
        <h3>Add Book</h3>
        <input type="text" v-model="newBook" class="form-control"/>
        <!--<input type="text" v-model="newBook.author" class="form-control"/>-->
        <button @click="addBook" class="btn btn-primary">Add Item</button>
        <ul class="list-group">
          <li v-for="book in books" class="list-group-item">{{book}} <a href="#" class="pull-right" @click="deleteBook">X</a></li>
        </ul>
      </section>
    </div>
  </div>
</div>
<script type="text/javascript" src="assets/js/main.js"></script>

</body>
</html>
