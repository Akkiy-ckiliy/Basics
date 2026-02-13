#include <stdio.h>

void secret_change(int *p) { //こっちに*pはただの住所用の箱を作っているだけ。
    *p = 999;
   //ポインタで住所の中身を直で書き換えに行ってる。 
}

int main() {
    int a = 10;
    secret_change(&a);
    printf("aの今の値は: %d\n", a);
    return 0;
}
