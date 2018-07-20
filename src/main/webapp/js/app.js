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
        var div = $("<div>");
        var p0 = $("<p>").text(book.id);
        var p = $("<p>").text(book.isbn);
        var p2 = $("<p>").text(book.title);
        var p3 = $("<p>").text(book.author);
        var p4 = $("<p>").text(book.publisher);
        var p5 = $("<p>").text(book.type);
        div.append(p0).append(p).append(p2).append(p3).append(p4).append(p5);
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
            var div = $("<div>");
            var p = $("<p>").text(elem.isbn);
            var p2 = $("<p>").text(elem.title);
            var button = $("<button>").data("id", elem.id).text("delete");
            var button2 = $("<button>").data("book", elem).text("edit");


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


            div.append(p).append(p2).append(button).append(button2);
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