function fun(a){
    if(a == 0) return;

    console.log(a);
    a--;

    fun(a);
}


fun(5);