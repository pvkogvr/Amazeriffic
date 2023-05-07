var main = function(toDoObjects){
    "use strict";
    var toDos = toDoObjects.map(function(toDo){
        return toDo.description;
    })
    var addTask = function(newTask, listTask){
        newTask = $("input").val()
        if (newTask != ''){
            listTask.push(newTask);
            alert(`Новое задание: ${newTask}, успешно добавлено`)
            $("input").val('');
        }
    }
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
                $(".content").append($("<input>")).on("keydown", function(e){
                    if(e.keyCode == 13){
                        addTask(newTodo, toDos);
                    }
                });
                $(".content").append($("<button>Добавить</button>")).on("click", function(){
                    addTask(newTodo, toDos);
                });
            } 
            return false;
        });
    });
    $(".tabs a:first-код для этого элемента может выглядеть вот так:child span").trigger("click");
};
$(document).ready(function(){
    $.getJSON("todos.json", function(toDoObjects){
        main(toDoObjects);
    });
});


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