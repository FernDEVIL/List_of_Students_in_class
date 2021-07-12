student_array = [];

function submit() {
    var n_1 = document.getElementById("s_1").value;
    var n_2 = document.getElementById("s_2").value;
    var n_3 = document.getElementById("s_3").value;
    var n_4 = document.getElementById("s_4").value;

    student_array.push(n_1);
    student_array.push(n_2);
    student_array.push(n_3);
    student_array.push(n_4);

    console.log(student_array);

    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}