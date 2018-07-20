<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Strona główna</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <link src="css/style.css" type="text/css">
</head>
<body>
    <form>
        <label>ID: <input type="text" id="id" disabled></label>
        <label>ISBN: <input type="text" name="isbn" id="isbn"></label>
        <label>Title: <input type="text" name="title" id="title"></label>
        <label>Author: <input type="text" name="author" id="author"></label>
        <label>Publisher: <input type="text" name="publisher" id="publisher"></label>
        <label>Type: <input type="text" name="type" id="type"></label>
        <label><button id="submit" type="button">submit</button></label>
        <label><button id="edit" type="button">edit</button></label>
    </form>
    <div id="books"></div>
</body>
</html>
