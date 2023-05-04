var main = function(){
    "use strict";
    var toDos =["Купить продукты",
    "Обновить несколько новых задач",
    "Подготовиться к лекциям в понедельник", 
    "Ответить на письма нанимателя LinkedIn", 
    "Вывести Грейси на прогулку в парк", 
    "Закончить писать книгу"]
    $(".tabs a span").toArray().forEach(function(element){
        $(element).on("click", function(){
            var $element = $(element);
            $(".tabs span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            if($element.parent().is(":nth-child(1)")){
                for (var i = toDos.length-1; i > -1; i --) {
                    $(".content").append($("<li>").text(toDos[i]));
                    }
            } else if ($element.parent().is(":nth-child(2)")){
                toDos.forEach(function (todo){
                    $(".content").append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")){
                var newTodo;
                $(".content").append($("<input>"))
                $(".content").append($("<button>Добавить</button>")).on("click", function(){
                    newTodo = $("input").val()
                    if (newTodo != ''){
                        toDos.push(newTodo);
                        alert(`Новое задание: ${newTodo}, успешно добавлено`)
                        $("input").val('');
                    }
                })
            } 
            return false;
        });
    });
    $(".tabs a:first-код для этого элемента может выглядеть вот так:child span").trigger("click");
};
$(document).ready(main);

//Уровни адаптивности:
//1. Написать код очевидно
//2. Создать функцию и вынести в неё общие строки
    // var makeTabActive = function(tabNumber){
    //     var tabSelector = ".tabs a:nth-child(" + tabNumber +") span";
    //     $(".tabs span").removeClass("active");
    //     $(tabSelector).addClass("active");
    // };
    // $(".tabs a:nth-child(1)").on("click", function(){
    //     makeTabActive(1);
    //     return false;
    // });
    // $(".tabs a:nth-child(2)").on("click", function(){
    //     makeTabActive(2);
    //     return false;
    // })
    // $(".tabs a:nth-child(3)").on("click", function(){
    //     makeTabActive(3);
    //     return false;
    // })
//3. Воспользоваться циклом для прохода по элементам, если они имеют номер
 // var tabNumber;
    // for(tabNumber = 1; tabNumber <= 3; tabNumber++){
    //     var tabSelector = ".tabs a:nth-child(" + tabNumber +") span";
    //     $(tabSelector).on("click", function(){
    //         $(".tabs span").removeClass("active");
    //         $(this).addClass("active");
    //         return false;
    //     })
    // }
//4. Имеет смысл воспользоваться циклом forEach