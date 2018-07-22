$(function () {
    showBooks();
    $("#submit").on("click", addBook);

    $("#edit").on("click", editBook);
});


function showBook(id) {
    $.ajax({
        url: "/books/" + id,
        data: {},
        type: "GET",
        dataType: "json",
        success: displayBook,
    });

    function displayBook(book) {
        var div = $("<div>").addClass("card").style("width: 18rem;");
        var id = $("<div>").addClass("card-header").text("Id# ").text(elem.id);
        var isbn = $("<p>").text(elem.isbn);
        var title = $("<p>").text(elem.title);
        var author = $("<p>").text(elem.author);
        var publisher = $("<p>").text(elem.publisher);
        var type = $("<p>").text(elem.type);
        div.append(id).append(isbn).append(isbn).append(title).append(author).append(publisher).append(type);
        $("#books").append(div);
    }

}

function showBooks() {
    $.ajax({
        url: "/books/",
        data: {},
        type: "GET",
        dataType: "json",
        success: displayBooks,
    });


    function displayBooks(books) {
        $("#books").empty();

        for (elem of books) {
            var div = $("<div>").addClass("card").css("width", "30%").css("margin-top", "2%");
            var id = $("<div>").addClass("card-header").text("Id# " + elem.id);
            var ul = $("<ul>").addClass("list-group list-group-flush");
            var liIsbn = $("<li>").addClass("list-group-item").text(elem.isbn);
            var liTitle = $("<li>").addClass("list-group-item").text(elem.title);
            var liAuthor = $("<li>").addClass("list-group-item").text(elem.author);
            var liPublisher = $("<li>").addClass("list-group-item").text(elem.publisher);
            var liType = $("<li>").addClass("list-group-item").text(elem.type);
            var button = $("<button>").attr("type","button")
                .css("width", "100px").data("id", elem.id).text("delete");
            var button2 = $("<button>").attr("type","button")
                .css("width", "100px").data("book", elem).text("edit");


            button.on("click", function () {
                deleteBook($(this).data("id"));
            });


            button2.on("click", function () {
                var book = $(this).data("book");
                $("#id").val(book.id);
                $("#isbn").val(book.isbn);
                $("#title").val(book.title);
                $("#author").val(book.author);
                $("#publisher").val(book.publisher);
                $("#type").val(book.type);
            });

            ul.append(liIsbn).append(liTitle).append(liAuthor).append(liPublisher).append(liType)
            div.append(id).append(ul).append(button).append(button2);
            $("#books").append(div);
        }
    }

}

function deleteBook(id) {
    $.ajax({
        url: "/books/"+id,
        data: {},
        type: "DELETE",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}

function editBook() {

    var id =  $("#id").val();
    var isbn = $("#isbn").val();
    var title = $("#title").val();
    var author = $("#author").val();
    var publisher = $("#publisher").val();
    var type = $("#type").val();
    var book = {id, isbn, title, author, publisher, type};


    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        url: "/books/"+book.id,
        data: JSON.stringify(book),
        type: "PUT",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}




function addBook() {
    var isbn = $("#isbn").val();
    var title = $("#title").val();
    var author = $("#author").val();
    var publisher = $("#publisher").val();
    var type = $("#type").val();
    var book = {isbn, title, author, publisher, type};

    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        url: "/books",
        data: JSON.stringify(book),
        type: "POST",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}

